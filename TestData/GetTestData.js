const { Module } = require("module");
let xlsx = require("xlsx");

class GetTestData {
    constructor(excelPath, sheetName, columnName) {
        this.excelPath = excelPath;
        this.sheetName = sheetName;
        this.columnName = columnName;
    }

    // Get test data based on DatasetID
    getTestData(datasetID) {
        let testDataMap;
        let workBook = xlsx.readFile(this.excelPath);
        let data = workBook.Sheets[this.sheetName];
        let jsonData = xlsx.utils.sheet_to_json(data);

        // Use find to get the first matching row
        const row = jsonData.find((row) => row[this.columnName] == datasetID);

        if (row) {
            testDataMap = new Map(Object.entries(row)); // Convert row to Map
            console.log("Found Row:", row); // Log row for debugging
        } else {
            console.log(`DatasetID ${datasetID} not found!`);
        }

        return testDataMap;
    }

    // Write or update test data based on DatasetID and Column
    writeTestData(datasetID, columnNameToUpdate, valueToUpdate) {
        let workBook = xlsx.readFile(this.excelPath);
        let data = workBook.Sheets[this.sheetName];
        let jsonData = xlsx.utils.sheet_to_json(data);

        // Find and update the relevant row
        let rowUpdated = false;
        jsonData.forEach((row, index) => {
            if (row[this.columnName]== datasetID) {
                console.log("Before Update:", row[columnNameToUpdate]);
                row[columnNameToUpdate] = valueToUpdate; // Update the column with new value
                console.log("After Update:", row[columnNameToUpdate]);
                rowUpdated = true; // Flag indicating data was updated
            }
        });

        if (!rowUpdated) {
            console.log(`No row found with DatasetID ${datasetID} for update.`);
            return;
        }

        // Convert the updated JSON back to sheet format
        const updatedSheet = xlsx.utils.json_to_sheet(jsonData);
        let newWorkBook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(newWorkBook, updatedSheet, this.sheetName);

        // Write the updated workbook to the file
        try {
            xlsx.writeFile(newWorkBook, this.excelPath);
            console.log("Workbook updated successfully!");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    }
}

module.exports=GetTestData;

// // Example usage:
// let testDataInstance = new GetTestData("C:\\Users\\anand\\OneDrive\\Documents\\Playwright-BDD\\TestData.xlsx", "credentials", "DatasetID");

// // Get the test data for DatasetID "DS_01"
// let data = testDataInstance.getTestData("DS_01");
// console.log("Current Username:", data.get("Username"));
// // Update the "Username" for DatasetID "DS_01"
// testDataInstance.writeTestData("DS_01", "Username", "Test2365");