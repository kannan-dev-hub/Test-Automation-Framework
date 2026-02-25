import {test, expect} from '@playwright/test'

test ('Handling Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const frames = await page.frames();
    console.log("Number of Frames: ", frames.length);

    // approach 1 using name or url
    //use name or url only
    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})

    // await frame1.fill('//input[@type="text"]', "Hello! My Name is Kanna");

    

    //approach 2 
    const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]');

    frame1.locator('//input[@type="text"]').fill("Hii!!");



    await page.waitForTimeout(5000);

    





})