import {test, expect} from '@playwright/test'

test ('Handling inner frames', async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.fill('//input[@name="mytext3"]', "Welcome");

    const childframes = await frame3.childFrames();
    console.log("Number of child frames/nested Frames: ",childframes.at.length);
    
    await childframes[0].locator('(//div[@class="AB7Lab Id5V1"])[1]').check();

    await page.waitForTimeout(5000);


})