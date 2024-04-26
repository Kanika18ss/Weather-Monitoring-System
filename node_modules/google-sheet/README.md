# Google Sheets

A package that wraps around the google-spreadsheet package to easily interface with google sheets.
The client secret json file was created using the google developer console. More in depth documentation can be found at [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet).
Make sure there is a file called client_secret.json in order to authenticate with google sheets in the root of the project.

## Installing

```
git clone git@github.com:JacobRichardson/GoogleSheets.git

npm install
```

## Basic Usage

```js
//Require in the package.
const googleSheet = require('googleSheet');

//Retrieve the sheet using the spreadsheet id.
const sheet = await googleSheet.accessSpreadsheet('<spreadsheet id>');

//Retrieve all the rows of the sheet using get rows.
let rows = await googleSheet.getRows(sheet);

//Create a new row with the name Jacob. (Spread sheet must have a column with the title of name)
await googleSheet.createRow(sheet, {
  name: 'Jacob'
});

//Retrieve a specific row using get queried rows and name equaling Jacob.
rows = await googleSheet.getQueriedRows(sheet, 'name = Jacob');

//Delete a row using delete row and the first row we found.
googleSheets.deleteRow(rows[0]);
```

## Testing

```
npm run test
```

## Author

[Jacob Richardson](https://github.com/JacobRichardson)
