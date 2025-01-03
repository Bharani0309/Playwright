import { test, expect } from 'playwright/test';

test('BuiltInLocators', async ({ page }) => {
    // Navigate to the login page
    //await page.setDefaulTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForFunction
    
    const profileImage = await page.getByAltText('profile picture');
    await profileImage.waitFor({state:'visible',timeout:60000}) 
    await expect(profileImage).toBeVisible();
});
