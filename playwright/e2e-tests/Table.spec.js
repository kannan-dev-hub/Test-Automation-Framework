import {test , expect} from '@playwright/test'

test ('Handling web Table', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');


    //Total number of colomns and rows

    const headers = await table.locator('thead tr th');
    console.log("Number of headers: ",await headers.count());

    const rows = await table.locator('tbody tr');
    console.log("Number of Rows : ", await rows.count());

    expect(await headers.count()).toBe(4);
    expect(await rows.count()).toBe(5);


    //select check box for smartwatch

    const matchedrows = rows.filter({
        has: page.locator('td'),
        hasText: "Smartwatch"


    })

    await matchedrows.locator('input').check();

    await page.waitForTimeout(6000);


    await selectproduct(rows, page, "Smartphone");
    await selectproduct(rows, page, "Smartwatch");
    await selectproduct(rows, page, "Tablet");
    await selectproduct(rows, page, "Laptop");

    //print all the data from the table

    for (let i=0; i< await rows.count(); i++){

        const row = rows.nth(i);
        const tds =row.locator('td');

        for (let j=0; j< await tds.count(); j++){

            console.log(await tds.nth(j).textContent());

        }

    };

    const pages = await page.locator('//ul[@id="pagination"]/li/a');
    console.log("Number of Page is the table: " , await pages.count());

    for (let p = 0; p < await pages.count(); p++ ){

        if(p > 0){
            await pages.nth(p).click()
        }
    };
        for (let i=0; i< await rows.count(); i++){

        const row = rows.nth(i);
        const tds =row.locator('td');

        for (let j=0; j< await tds.count(); j++){

            console.log(await tds.nth(j).textContent());

        }

    };

    

})

async function selectproduct(rows, page, ProductName){
    const matchedrows = rows.filter({
        has: page.locator('td'),
        hasText: ProductName


    })

    await matchedrows.locator('input').check();


}