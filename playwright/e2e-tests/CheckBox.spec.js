import {test, expect} from '@playwright/test'

test ('Handling CheckBoxes', async({page})=>{

    await page.goto('https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php');

    //single check box 
    // await page.check('#passport');
    await page.locator('#passport').check();

    await expect(await page.locator('#passport')).toBeChecked();
    await expect(await page.locator('#passport').isChecked()).toBeTruthy();
    await expect(await page.locator('#studentid').isChecked()).toBeFalsy();

    //multipple check boxes

    const checkboxesLocators=[
        '#passport',
        '//input[@id="studentid"]',
        '#votercard',
        '#drivinglicense'

    ]

    for(const locator of checkboxesLocators){
        await page.check(locator)

    };
    await page.waitForTimeout(4000);

    for(const locator of checkboxesLocators){
        if (await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
            // await page.uncheck(locator);


        }

    }
    await page.waitForTimeout(4000);

    
})