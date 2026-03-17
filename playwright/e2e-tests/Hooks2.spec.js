import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser}) => {
    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/index.html");

    // Login
    await page.click("#login2");
    await page.locator("#loginusername").fill("neomurali");
    await page.locator("#loginpassword").fill("murali2026");
    await page.locator("//button[text()='Log in']").click();

});

test.afterEach(async() => {
    // logout
    await page.locator('#logout2').click();
})


test("Home Page Test", async() => {  
    // Home page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);
})


test("Add To Cart Test", async() => {

    // Add to Cart
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });
})