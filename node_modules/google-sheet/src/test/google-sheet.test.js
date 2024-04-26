/**
 * This module tests the google spreadsheet wrapper.
 */

//Imports
require('dotenv').config();
const test = require('tape');
//const describe = require('riteway').describe;
//const googleSheet = require('../app/google-sheets');

// Google sheets compile test.
test('Google sheets complies.', async t => {

	try {

		// Require in the module.
		require('../app/google-sheets');

		// Pass the test because there was no error.
		t.pass('Pass the test because no error requiring in the module.')

	}
	catch (e) {

		// Fail the test with the error.
		t.fail(e);
	}

	// End the test.
	t.end();
});

/** TODO: Uncomment once GitHub secrets are working properly.

//Testing access spreadsheet.
describe('accessSpreadsheet()', async assert => {

	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	//Verify the url contains the id.
	assert({
		given: 'The spread sheet id'
		, should: 'return the sheet with the url containing the id.'
		, actual: sheet.url.includes(process.env.PURCHASES_JULY2019_ID)
		, expected: true
	});
});

//Testing get rows.
describe('getRows()', async assert => {
	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	//Retrieve the rows using get rows.
	const rows = await googleSheet.getRows(sheet);

	//Verify rows were returned.
	assert({
		given: 'The sheet'
		, should: 'return an array or rows.'
		, actual: rows === undefined
		, expected: false
	});
});

//Testing get queried rows.
describe('getQueriedRows()', async assert => {
	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	//The query for finding a row.
	const query = 'price = 202.39';

	//The expected price of the row.
	let expected = '$202.39';

	//Retrieve a row based on the price.
	const row = (await googleSheet.getQueriedRows(sheet, query))[0];

	//Verify the rows price.
	assert({
		given: 'The sheet and the query of "' + query + '"'
		, should: 'return an object with the correct price'
		, actual: row.price
		, expected
	});
});

//Testing update row
describe('updateRow()', async assert => {
	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	//The query for finding a row.
	const query = 'price = 202.39';

	//Retrieve a row based on the price.
	let row = (await googleSheet.getQueriedRows(sheet, query))[0];

	//Value for what to update notes to.
	const notes = 'Test';

	//Update the row.
	await googleSheet.updateRow(row, {
		notes
	});

	//For some reason their was a race condition with updating and fetching again.
	setTimeout(async function () {
		//Retrieve the updated row.
		let updatedRow = (await googleSheet.getQueriedRows(sheet, query))[0];

		//Verify the rows notes.
		assert({
			given: 'The row and the value'
			, should: 'update the row properly.'
			, actual: updatedRow.notes
			, expected: notes
		});
	}, 200);
});

//Testing create row.
describe('createRow()', async assert => {
	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	const itemname = 'Test';

	//Data for the new row.
	const data = {
		itemname
	};

	//Use google sheets to create the row.
	await googleSheet.createRow(sheet, data);

	//Query used to find the row.
	const query = 'itemname = ' + itemname;

	//Retrieve a row based on the price.
	const row = (await googleSheet.getQueriedRows(sheet, query))[0];

	//Verify the rows name.
	assert({
		given: 'The data'
		, should: 'create a row with the data.'
		, actual: row.itemname
		, expected: itemname
	});
});

//Testing delete row.
describe('deleteRow()', async assert => {
	//Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	//The item name to search by.
	const itemname = 'Test';

	//Query used to find the row.
	const query = 'itemname = ' + itemname;

	//Retrieve a row based on the price.
	let row = (await googleSheet.getQueriedRows(sheet, query))[0];

	//Delete the row.
	googleSheet.deleteRow(row);

	//For some reason their was a race condition with deleting and fetching again.
	setTimeout(async function () {
		//Retrieve the updated row.
		let deletedRow = (await googleSheet.getQueriedRows(sheet, query))[0];

		//Verify the row was deleted.
		assert({
			given: 'The row'
			, should: 'delete the row.'
			, actual: deletedRow
			, expected: undefined
		});
	}, 100);
});

// Testing get cells.
describe('getCells()', async assert => {

	// Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	// The query to find the cells.
	const query = {
		'min-row': 1
		, 'max-row': 1
		, 'return-empty': true
	}

	// Retrieve the first row.
	const cells = (await googleSheet.getCells(sheet, query));

	// Verify the cells length to be 28.
	assert({
		given: 'the sheet and a query'
		, should: 'return 28 cells.'
		, actual: cells.length
		, expected: 28
	});
});

// Testing get cell.
describe('getCell()', async assert => {

	// Use the access spreadsheet function to retrieve the sheet.
	const sheet = await googleSheet.accessSpreadsheet(
		process.env.PURCHASES_JULY2019_ID
	);

	// Set row equal to 1.
	const row = 1;

	// Set col equal to 2.
	const col = 2;

	// Retrieve the cell.
	const cell = (await googleSheet.getCell(sheet, row, col));

	// Verify the cells value.
	assert({
		given: 'the sheet, a row, and a column'
		, should: 'returns the correct value of the cell.'
		, actual: cell.value
		, expected: 'Quantity'
	});
});

// TODO: Write save cell and save cells test.

*/