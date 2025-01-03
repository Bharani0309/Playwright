const { Given} = require('@cucumber/cucumber');
Given('navigate to orange HRM URL',{ timeout: 60000 }, async function () {
  console.log('Navigating to the HRM URL...');
  if (global.page === undefined) {
    console.log("Error: Page is undefined!");
  }
  await global.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    {waitUntil: 'load', // Ensure the page is fully loaded before continuing
    waitUntil: 'domcontentloaded'});
});