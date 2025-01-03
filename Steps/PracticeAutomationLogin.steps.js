const {Given,Then}=require("@cucumber/cucumber");
const { expect } = require("playwright/test");
const path=require("path");
const testDataPathName=path.resolve("TestData.xlsx");
let GetTestData=require("../TestData/GetTestData");
let getTestDataObj=new GetTestData(testDataPathName,"AutomationPracticeCredentials","Dataset ID");;
let testDataMap;

Given('navigate to practice automation website', async function () {
await global.page.goto("https://practicetestautomation.com/practice-test-login/");
  });
  Given('get the test data for DS_01_01', function () {
    testDataMap=getTestDataObj.getTestData("DS_01_01");
    console.log(testDataMap);
  });
  Given('get the test data for DS_02_01', function () {
    testDataMap=getTestDataObj.getTestData("DS_02_01");
    console.log(testDataMap);
  });
  Given('get the test data for {string}', function (datasetID) {
    testDataMap=getTestDataObj.getTestData(datasetID);
    console.log(testDataMap);  
  });
  Given('enter the user name in practice automation login page', async function () {
  await global.page.locator("[id='username']").click();
  await global.page.locator("[id='username']").fill(testDataMap.get("Username").toString())
  });

  Given('enter the password in practice automation login page',async function () {
    await global.page.locator("[id='password']").click();
    await global.page.locator("[id='password']").fill(testDataMap.get("Password"))
  });

  Given('click on submit button in practice automation login page',async function () {
  //id="submit"
  await global.page.locator("[id='submit']").click();
  });

  Then('verify user should be logged in successfully',async function () {
  let loginTextContent=await global.page.locator("[class='post-title']").innerText();
  console.log( loginTextContent);
  await expect(await global.page.locator("[class='post-title']")).toContainText("Logged In Successfully");
  await expect(global.page.locator("//a[text()='Log out']")).toBeVisible();
});
Then('verify should see the invalid username validation message',async function () {
  try{
  let loginTextContent=await global.page.locator("[id='error']").innerText();
  console.log( loginTextContent);
  await expect(await global.page.locator("[id='error']")).toContainText("Your username is invalid!");
  }
  catch(error)
  {
    console.log(error)
  }
});
Then('verify should see the invalid password validation message',async function () {
  let loginTextContent=await global.page.locator("[id='error']").innerText();
  console.log( loginTextContent);
  await expect(await global.page.locator("[id='error']")).toContainText("Your password is invalid!");
});