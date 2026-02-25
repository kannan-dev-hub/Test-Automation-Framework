import {test, expect} from '@playwright/test'

test('Soft assert', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/');

    //hard assertion

    // await expect(page).toHaveTitle('STORE');
    // await expect(page).toHaveURL('https://www.demoblaze.com/');

    // await expect(page.locator('//a[@id="nava"]')).toBeVisible();


    //Soft assertion

    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');

    await expect.soft(page.locator('//a[@id="nava"]')).toBeVisible();


})