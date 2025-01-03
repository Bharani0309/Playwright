class OrangeHRMLoginObj
{
    constructor(page)
    {
        this.page=page;
    }
    getUserName()
    {    
        return this.page.locator('[name="username"]');
    }
    async getPassword()
    {
        return this.page.locator('[name="password"]');
    }
    async getLoginButton()
    {
        return this.page.locator("//button[contains(@class,'orangehrm-login-button')]");
    }

    async getLoginValidation()
    {
        return this.page.locator("//p[@class='oxd-userdropdown-name']");
    }

}

module.exports=OrangeHRMLoginObj;