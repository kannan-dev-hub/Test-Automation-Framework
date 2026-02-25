// import {test, expect} from '@playwright/test'

const{test, expect} = require('@playwright/test');


test ('Hidden Dropdown', async ({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123');
    // await page.fill("//input[@name='password']", "admin123");
    // await page.click('//button[@type="submit"]');
    await page.locator('//button[@type="submit"]').click();

    await page.locator('//span[text()="PIM"]').click();

    // await page.click('(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[3]');
    await page.locator('(//i[@class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"])[3]').click();

    await page.waitForTimeout(4000);

    const Options = await page.$$('//div[@role="listbox"]//span');

    for(let Option of Options){

        const text = await Option.textContent();

        console.log(text);
        
        if (text =="QA Lead"){
            await Option.click();
            break;
        }



    }
        







})