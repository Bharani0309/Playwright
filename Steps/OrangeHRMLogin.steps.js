const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
let GetTestData=require("../TestData/GetTestData");
let getTestDataObj=new GetTestData("C://Users//anand//OneDrive//Documents//Playwright-BDD//TestData.xlsx","credentials","DatasetID")
let testDataMap;
Given('update the test data for {string}', function (datasetID) {
  testDataMap= getTestDataObj.getTestData(datasetID);

});

Given('enter the user name', async () => {
  await global.page.locator('[name="username"]').fill(testDataMap.get("Username"));  // Using global.page
});


Given('enter the password', async () => {
  await global.page.locator('[name="password"]').fill(testDataMap.get("Password"));
});
Given('enter password', async () => {
  await global.page.locator('[name="password"]').fill("admin13");
});
When('click on login button', async () => {
  console.log('Clicking on the login button...');
  await global.page.locator("//button[contains(@class,'orangehrm-login-button')]").click();
});
Then('verify appication got logged in successfully',async function name(){
  console.log('Verifying successful login...');
  await global.page.waitForSelector("//p[@class='oxd-userdropdown-name']",{timeout:20000});
  const userDropdown = await global.page.locator("//p[@class='oxd-userdropdown-name']");
  await expect(userDropdown).toBeVisible();
});