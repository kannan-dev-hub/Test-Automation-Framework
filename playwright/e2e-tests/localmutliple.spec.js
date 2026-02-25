import {test, expect} from '@playwright/test'

test ('localmultiple', async({page}) =>{

    await page.goto('https://www.demoblaze.com/');

    await page.waitForSelector(".card-block")
    const cards = await page.$$(".card-block")
    console.log(cards.length);

    for(const card of cards){
        const title = await card.$('h4 a');
        const price =await card.$('h5')
        const titletext = await title.textContent()
        const pricetext =await price.textContent()
        console.log(`prouduct Name: ${titletext} \n price: ${pricetext} \n`);
    
    }
    

    await page.close();




})