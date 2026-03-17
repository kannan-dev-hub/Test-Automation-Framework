import {test, expect} from '@playwright/test';

test("Mouse hover test", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const mouseHover = await page.locator("//button[@class='dropbtn']");

    await mouseHover.hover();

    const mobiles = await page.locator("//a[text()='Mobiles']").textContent();
    expect(mobiles).toBe("Mobiles");

    
});