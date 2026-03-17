import {test, expect} from '@playwright/test';


test("Home Page Test", async({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // Login
    await page.click("#login2");
    await page.locator("#loginusername").fill("neomurali");
    await page.locator("#loginpassword").fill("murali2026");
    await page.locator("//button[text()='Log in']").click();
    

    // Home page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);

    // logout
    await page.locator('#logout2').click();
})


test("Add To Cart Test", async({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // Login
    await page.click("#login2");
    await page.locator("#loginusername").fill("neomurali");
    await page.locator("#loginpassword").fill("murali2026");
    await page.locator("//button[text()='Log in']").click();

    // Add to Cart
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });


    // logout
    await page.locator('#logout2').click();
})