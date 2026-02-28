const {test, expect} = require('@playwright/test');


test("Date Picker", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.fill("#datepicker", "02/14/2026");

    const year = 2026;
    const month = "March";
    const day = "14";

    await page.click("#datepicker");

    while(true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear > year) {
            await page.click("//a[@title='Prev']")
        } else if (currentYear < year) {
            await page.click("//a[@title='Next']")
        } else if (currentYear == year && currentMonth != month) {
            // Get month index to determine direction
            const months = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
            const currentMonthIndex = months.indexOf(currentMonth);
            const targetMonthIndex = months.indexOf(month);
            
            if (currentMonthIndex < targetMonthIndex) {
                await page.click("//a[@title='Next']");
            } else {
                await page.click("//a[@title='Prev']");
            }
        }

        if(currentYear == year && currentMonth == month) {
            break;
        }
    
    }

    // const dates = await page.$$("//a[@class='ui-state-default']");

    // for(const dt of dates) {
    //     if(await dt.textContent() == day) {
    //         await dt.click();
    //         break;
    //     }
    // };

    await page.click(`//a[@class='ui-state-default'][text()=${day}]`)

    await page.waitForTimeout(3000);
});