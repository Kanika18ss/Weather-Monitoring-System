/**
 * This module is a wrapper for google sheets
 * in order to access a spreadsheet, get rows,
 * query rows, create a row, update a row, and
 * delete a row.
 */

//Imports.
require('dotenv').config();
const GoogleSpreadsheet = require('google-spreadsheet');
const promisify = require('util').promisify;
const creds = require('../../config').creds;

/**
 * This function gets access to the spreadsheet.
 * @param {String} spreadSheetId The spreadsheet id.
 * This can be found in the spreadsheet's url.
 * @returns {Object} The sheet.
 */
module.exports.accessSpreadsheet = async function accessSpreadsheet (spreadSheetId) {
	//Retrieve the doc by using the spreadsheet id.
	const doc = new GoogleSpreadsheet(spreadSheetId);

	//Use the creds to authorize.
	await promisify(doc.useServiceAccountAuth)(creds);

	//Get the info from the doc.
	const info = await promisify(doc.getInfo)();

	//Retrieve the first sheet.
	const sheet = info.worksheets[0];

	//Return the sheet.
	return sheet;
};

/**
 * This function retrieves all the rows of a sheet.
 * @param {Object} sheet The google sheet.
 * @return {Array} An array of google sheet rows.
 */
module.exports.getRows = async function getRows (sheet) {
	return await promisify(sheet.getRows)({
		offset: 0
	});
};

/**
 * This function filters a sheet based
 * on the query string.
 * @param {Object} sheet a reference to the
 * google sheet.
 * @param {String} query The query string.
 * @return {Array} Matched rows.
 */
module.exports.getQueriedRows = async function getQueriedRows (sheet, query) {
	return await promisify(sheet.getRows)({
		query
	});
};

/**
 * This function updates a row by copying
 * the values from the these values object
 * onto the row if the value exists on the row.
 * @param {Object} row A reference to
 * the google sheets row.
 * @param {Object} values An object that
 * contains the values to be updated.
 */
module.exports.updateRow = function updateRow (row, values) {
	//For each in key in values.
	Object.keys(values).forEach(key => {
		//If the row has the key.
		if (row[key]) {
			//Update the value of the key on the row.
			row[key] = values[key];
		}
	});

	//Save the row.
	row.save();
};

/**
 * This function creates a row.
 * @param {Object} sheet A reference to the
 * google sheet.
 * @param {Object} data The data of the row.
 */
module.exports.createRow = async function createRow (sheet, data) {
	await promisify(sheet.addRow)(data);
};

/**
 * This function deletes a row.
 * @param {Object} row A reference to the
 * google sheets row.
 */
module.exports.deleteRow = function deleteRow (row) {
	if (row.del && typeof row.del === 'function') {
		row.del();
	}
};

/** 
 * Retrieves an individual cell in the sheet.
 * @param {Object} sheet A reference to the sheet.
 * @param {Number} row The row of the desired cell.
 * @param {Number} col The column of the desired cell.
 */
module.exports.getCell = async function getCell (sheet, row, col) {

	// Create a query object to retrieve the row.
	const query = {
		'min-row': row
		, 'max-row': row
		, 'return-empty': true
	}

	// Retrieve the row of cells by using the query.
	const cells = await promisify(sheet.getCells)(query);

	// For each cell in cells.
	for (let cell of cells) {

		// If the cell and the row match the given row and cell.
		if (cell.row === row && cell.col === col) {

			// Return the cell.
			return cell;
		}
	}
}

/** 
 * Retrieves rows of cells.
 * @param {Object} sheet A reference to the sheet.
 * @param {Object} query The query object.
 * @param {Number} query.minRow (supposed to be min-row) the beginning row.
 * @param {Number} query.maxRow (supposed to be max-row) the ending row.
 * @param {Boolean} query.returnEmpty (supposed to be return-empty) wether
 * or not to return empty cells.
 */
module.exports.getCells = async function getCells (sheet, query) {

	// Return the result of get cells with the query.
	return await promisify(sheet.getCells)(query);
}

/** 
 * Saves a cell.
 * @param {Object} cell A reference to the cell.
 */
module.exports.saveCell = async function saveCell (cell) {

	// Return the result of saving the cell.
	return await promisify(cell.save)();
}

/** 
 * Saves multiple cells.
 * @param {Object} sheet A reference to the sheet.
 * @param {Array<Object>} cells An array of cells that need to be saved.
 */
module.exports.saveCells = async function saveCells (sheet, cells) {

	// Return the result of doing a bulk update with the cells.
	return await promisify(sheet.bulkUpdateCells)(cells);
}