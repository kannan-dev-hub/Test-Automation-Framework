const {test, expect} = require('@playwright/test');

test('Home Page Tile', async ({page}) => {
    // Open skillmint website page
    await page.goto('https://www.demoblaze.com/');

    // get title
    const pageTitle = await page.title();
    console.log('The page tile is ', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url();
    console.log('Page URL is ', pageUrl);

    await expect(page).toHaveURL('https://www.demoblaze.com/');    

    await page.close();
    
});
