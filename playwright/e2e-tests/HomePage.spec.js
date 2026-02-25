const {test, expect} = require('@playwright/test');

test('Home Page Title', async ({page}) => {
    // Open skillmint website
    await page.goto('https://skillmint-eg4e.onrender.com/');

    // get title
    const pageTitle = await page.title();
    console.log('The page tile is ', pageTitle);

    await expect(page).toHaveTitle('Skillmint');

    const pageUrl = page.url();
    console.log('Page URL is ', pageUrl);

    await expect(page).toHaveURL('https://skillmint-eg4e.onrender.com/');    
    

    await page.close();
    
});
