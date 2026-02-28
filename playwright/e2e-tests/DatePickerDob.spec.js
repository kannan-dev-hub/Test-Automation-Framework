import { test, expect} from '@playwright/test'

test ('my dataofbirth', async({page}) =>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    

    const targetYear = 2000;
    const targetMonth = "April";
    const targetDay = "3";

    await page.click("#datepicker");

    while (true) {
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentyear ==targetYear && currentmonth ==targetMonth){
            break;
        }

        if (currentyear > targetYear){
            await page.locator('.ui-datepicker-prev').click();

        } else if (currentyear < targetYear){
            await page.locator('.ui-datepicker-next').click();

        }else if (currentyear == targetYear && currentmonth != targetMonth) {
            // same year, check month
            const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"];

      if (months.indexOf(currentmonth) > months.indexOf(targetMonth)){
        await page.locator(".ui-datepicker-prev").click();

      } else{
        await page.locator(".ui-datepicker-next").click();
      }


    }
}
// await page.locator(`//a[text()='${targetDay}']`).click();
await page.locator('#ui-datepicker-div').getByRole('link', { name: targetDay, exact: true }).click();

});
