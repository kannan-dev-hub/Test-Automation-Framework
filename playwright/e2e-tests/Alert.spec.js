import {test, expect} from '@playwright/test'

test.skip ('Simple alerts', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //by default , playwright will handle the alerts
    //enable dialog windows handler
    page.on('dialog' , async dialog =>{
        console.log("Alert type: ", dialog.type());
        expect(dialog.type()).toContain('alert');    //alert
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
      

    })
    // await page.click('#alertBtn');
    await page.click('//button[text()="Simple Alert"]');
    

})

test.skip ('Confirmation Alert', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //by default , playwright will handle the alerts
    //enable dialog windows handler
    page.on('dialog' , async dialog =>{
        console.log("Alert type: ", dialog.type());
        expect(dialog.type()).toContain('confirm');    //confirm alert
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
        // await dialog.dismiss();
        

    })
    // await page.click('#confirmBtn');
    await page.click('//button[text()="Confirmation Alert"]');
    await expect(await page.locator('#demo')).toHaveText('You pressed OK!');
   

})

test ('Prompt alert', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //by default , playwright will handle the alerts
    //enable dialog windows handler
    page.on('dialog' , async dialog =>{
        console.log("Alert type: ", dialog.type());
        expect(dialog.type()).toContain('prompt');    //confirm alert
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Kanna');
        // await dialog.dismiss();
        

    })
    // await page.click('#promptBtn');
    await page.click('//button[text()="Prompt Alert"]');
    await expect(await page.locator('#demo')).toHaveText('Hello Kanna! How are you today?');
  

})