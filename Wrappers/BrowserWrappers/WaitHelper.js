class WaitHelper
{
    constructor(page)
    {
        this.page=page
    }
    async waitForSelectorOnState(locator,milliSeconds,state)
    {
        try{
            await this.page.waitForSelector(locator,{timeout:milliSeconds,state:state})
        }
        catch(error)
        {
            console.log(`${locator} is not in ${state} state in ${milliSeconds} ms`)
        }
    }
 
}