import{test, expect} from '@playwright/test';

test('Locate Multiple Element', async({page}) => {
    await page.goto('https://www.demoblaze.com/');

    //Locate all the links in the UI
    const links = await page.$$('a');     //it will return array 

    //log the number of links found

    console.log('Found ${links.length} links');

    
    //print the text of the line
    for (const link of links){
        const text = await link.textContent();
        console.log(text);
        

    };
     await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    console.log(`Found ${products.length} products`);

    for (const product of products) {
        console.log(await product.textContent());
}



    await page.close()
})

