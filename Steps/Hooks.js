const { setWorldConstructor, Before, After, BeforeAll, AfterAll, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
setDefaultTimeout(60000);
// CustomWorld class to manage browser, context, and page lifecycle
class customWorld {
  constructor({ attach }) {
    this.attach = attach; // Assign attach function to the World instance
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  // Initialize the browser
  async initializeBrowser() {
    this.browser = await chromium.launch({ headless: false });
  }

  // Initialize the page and context
  async initializePage() {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  // Close the browser
  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  // Close the page and context
  async closePage() {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
  }
}

// Set the customWorld class as the World constructor
setWorldConstructor(customWorld);

// Instance of customWorld to be used in hooks
let customWorldObj;

// BeforeAll hook to initialize the browser
BeforeAll(async function () {
  customWorldObj = new customWorld({ attach: this.attach }); // Pass attach function
  console.log("Initializing Browser...");
  await customWorldObj.initializeBrowser(); // Initialize the browser
});

// Before hook to initialize context and page for each scenario
Before(async function () {
  console.log("Initializing Context and Page...");
  await customWorldObj.initializePage(); // Initialize context and page for each scenario
  global.page = customWorldObj.page; // Store the page object globally
});

// AfterStep hook to attach screenshots and step details
AfterStep(async function (step) {
  try {
    if (global.page) {
      console.log("Attching screenshot")
      const screenshot = await global.page.screenshot({ encoding: 'base64', fullPage: true });
      await this.attach(screenshot, 'image/png'); // Use the attach function from Cucumber's World
    }

    if (step.result.status === 'failed' && step.result.message) {
      await this.attach(`Error: ${step.result.message}`, 'text/plain');
    }
  } catch (error) {
    console.error("Error attaching screenshot or details: ", error.message);
  }
});

// After hook to close the page after each scenario
After(async function () {
  console.log("Closing the Page...");
  await customWorldObj.closePage(); // Close the page and context
  //global.page = null; // Optionally reset the global page after each test
});

// AfterAll hook to close the browser after all scenarios
AfterAll(async function () {
  console.log("Closing the Browser...");
  await customWorldObj.closeBrowser(); // Close the browser after all tests
});