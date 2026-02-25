import {test, expect} from '@playwright/test';
import { stat } from 'node:fs';

test ('Handling Dropdowns', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //handling the dropdowns
 
    await page.locator('#country').selectOption({lable : 'india'});    //lable =visiable text
    // await page.waitForTimeout(3000);
    await page.locator('#country').selectOption('japan');
    // await page.waitForTimeout(3000);
    await page.locator('#country').selectOption({value : 'usa'});
    // await page.waitForTimeout(3000);
    await page.locator('#country').selectOption({index : 1});
    // await page.waitForTimeout(3000);
    await page.locator('#country', 'india');
    // await page.waitForTimeout(3000);

    //Assertion
    //check number of options inn the dropdowns
    const options = await page.locator('#country option');
    console.log(options);
    
    await expect(options).toHaveCount(10);

    //check number of options inn the dropdowns (Approach 2)
    const optionarray = await page.$$('//select[@id="country"]/option');
    console.log('number of options:', optionarray.length);
    await expect(optionarray.length).toBe(10);

    //check the presence of option in the dropdown

    const contents = await page.locator('#country').textContent();
    await expect(contents.includes('Germany')).toBeTruthy();


    //select options from the dropdown using for loop

    for(const option of optionarray){
        let value = await option.textContent()
        console.log(value);
        
        if(value.includes('France')){
            await page.selectOption('#country', value.trim());
            break;  
        }

    }
    let status = false;
    for (const option of optionarray){

        let optiontext = await option.textContent();
        if(optiontext.includes('India')){
            status = true;
            break;

        }
    }

    await expect(status).toBeTruthy()


})