import { test, expect } from '@playwright/test'

test('LocatingMultipleElements', async ({ page }) => {

    await page.goto('https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_bf419b97-a03a-4943-a022-fa38a1284bb5_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J')

    const links = await page.$$('a') 

    for (const link of links) {
        const linkText = await link.textContent();  
        console.log(linkText);  
    }

})
