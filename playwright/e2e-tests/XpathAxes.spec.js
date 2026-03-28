import {test, expect} from '@playwright/test'

test ('Xpath Axes' , async({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // self axis 
    const selfaxes = page.locator("//td[text()='Germany']//self::td");
    await expect(selfaxes).toHaveText("Germany");
    // parent axis
    const parentaxes = page.locator("//td[text()='UK']//parent::tr//td[text()='UK']//parent::tr");
    await expect(parentaxes).toContainText("Island Trading");
    //child axis
    const childaxis = page.locator('//table[@id="customers"]//tr[2]/child::td');
    await expect(childaxis).toHaveCount(3);

    // ancestor
    const ancestor = page.locator('//td[text()="Germany"]//ancestor::table');
    await expect(ancestor).toHaveAttribute('id', 'customers');

     // descendant
     const descendant = page.locator('//table[@id="customers"]//descendant::td');
     await expect(descendant).toHaveCount(18);

    //following
     const following =page.locator("//td[normalize-space()='Germany']//following::td[text()='Francisco Chang']")
     await expect(following).toHaveText('Francisco Chang');

      // following sibling
    const followingsibling = page.locator("//td[normalize-space()='Maria Anders']//following-sibling::td");
    await expect(followingsibling).toHaveCount(1);

    //preceding-sibling

    // //span[text()='100+ bought in past month']/parent::div[@class='a-row a-size-base'][1]/preceding-sibling::div











})