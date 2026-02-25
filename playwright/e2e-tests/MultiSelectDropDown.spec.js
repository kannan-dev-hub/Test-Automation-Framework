import{test , expect} from '@playwright/test'

test('Handling Multi select dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //check if the dropdown is multiselct 
    const dropdown = await page.locator('#colors');
    await expect(dropdown).toHaveAttribute('multiple', '');


    //select mulitiple options

    await page.locator('#colors').selectOption(['Red', 'Blue', 'Green'])
    await page.selectOption('#colors', ['Yellow', 'White', 'Green'])

    //Assertion
    //Check number of options

    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(7);

    //check number of options using array
    const optionarray = await page.$$('#colors option');
    await expect(optionarray.length).toBe(7);

    //check the presence of the option
    const contents = await page.locator('#colors').textContent();
    await expect(contents.includes('Blue')).toBeTruthy()

    await page.waitForTimeout(3000);



})