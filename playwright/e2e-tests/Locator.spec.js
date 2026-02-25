//  const {test, expect}=require('@playwright/test')
 import {test, expect} from '@playwright/test';

//  open the web page -https://www.demoblaze.com/
//  locate the login button and click 
// pass the username and password
// click the login button 
//  verfiey the logout button 
// close the webpage 
test('Login in functionality test', async({page}) =>{
    await page.goto('https://www.demoblaze.com/');

    // await page.locator('id="login2').click();
    // await page.click('id="login2');
    await page.click('#login2');

    await page.fill("//input[@id='loginusername']", 'neomurali');
    // await page.locator("//input[@id='loginusername']").fill('neomurali');

    await page.fill("//input[@id='loginpassword']", "murali2026");

    await page.click("//button[@onclick='logIn()']")
    await page.click("//button[text()='Log in']")
    
    const logout = await page.locator('#logout2')
    await expect(logout).toBeVisible();
    await page.close()

})