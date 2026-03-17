import {test, expect} from '@playwright/test';


test("Mouse Right Click Test", async({page}) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClick = await page.locator("//span[text()='right click me']");

    await rightClick.click({button: 'right'});

    await page.waitForTimeout(5000);
})