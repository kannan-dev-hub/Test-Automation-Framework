// import {test, expect} from '@playwright/test'

const {test, expect} = require('@playwright/test');

test ('Handling InputBox',  async({page}) =>{
    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php')

    //verfieying the input box
    await expect(await page.locator('//input[@id="fathername"]')).toBeVisible();
    await expect(await page.locator('//input[@id="fathername"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="fathername"]')).toBeEditable();
    await expect(await page.locator('//input[@id="fathername"]')).toBeEnabled();

    await page.locator('//input[@id="fathername"]').fill('Pandya');
    console.log(await page.locator('//input[@id="fathername"]').inputValue());

    await page.close()



}) 