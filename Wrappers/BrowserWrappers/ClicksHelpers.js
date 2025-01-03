const { loadConfiguration } = require("@cucumber/cucumber/api");
const WaitHelper=require("../BrowserWrappers/WaitHelper");

class ClicksHelper
{
     
    constructor(page)
    {
        this.page=page
    }
    async ClickOnElement(locator)
    {
        try{
        await this.page.waitForSelector(locator);
        await this.page.click(locator);
        }
        catch(error)
        {
        console.log(`Error on ${locator} Exception is ${error}`)
        }
    }
    async rightClick(locator)
    {

    }
}