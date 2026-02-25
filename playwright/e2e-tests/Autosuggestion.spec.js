import {test, expect} from '@playwright/test'

test ('Auto Dropdown', async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.locator("//input[@id='srcinput']").fill('chennai');
    await page.waitForSelector("//div[contains(@class, 'leftContent')]//div[@role='heading']");

    await page.waitForTimeout(5000)

    const fronCityOptions = await page.$$("//div[contains(@class, 'leftContent')]//div[@role='heading']");

    for (let option of fronCityOptions) {
        const city = await option.textContent()
        console.log(city);

        if(city == 'Tambaram') {
            await option.click();
            break;
        }       

    }

    await page.waitForTimeout(5000)
})