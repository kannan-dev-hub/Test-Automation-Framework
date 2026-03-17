import {test, expect} from '@playwright/test';

test("Double Click", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopy = await page.locator("//button[text()='Copy Text']");

    await btnCopy.dblclick(); 

    const field1 = await page.locator('#field1').textContent();
    const field2 = await page.locator('#field2')

    await expect(field2).toHaveText(field1);

})