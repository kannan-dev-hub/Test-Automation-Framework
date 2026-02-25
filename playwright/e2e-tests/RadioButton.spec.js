import {test, expect} from '@playwright/test'

test ('Handlingradio Button', async({page})=>{
    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');

    //radio button 
    await page.locator('#male').check()

     await expect(await page.locator('#male')).toBeChecked();

    await expect(await page.locator('#male').isChecked()).toBeTruthy();
    await expect(await apge.locator('#female').isChecked()).toBeFlasy();


})