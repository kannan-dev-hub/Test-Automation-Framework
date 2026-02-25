import{test, expect} from '@playwright/test';

// const{test, expect} = require('@playwright/test');

test ('Assertion', async({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register');


    //page url or not(toHaveURL)

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //page title verfiey(toHaveTitle)
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logo = await page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible()

    //Control is enable?(toBeEnabled)
    await expect(await page.locator('input#small-searchterms')).toBeEnabled();

    const radioButton = await page.locator('#gender-male')
    await radioButton.click()

    //radio or checkbox checked(toBeChecked)
    await expect(radioButton).toBeChecked();
    const checkbox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(checkbox).toBeChecked();

    //Element has attribute(toHaveAttribute)
    const registerButton  = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type' , 'submit')

    //element have text?(toHaveText)(exact match)
    const registertext = await page.locator('.page-title h1')
    await expect(registertext).toHaveText('Register');

    //element conatains text? partial checking(toContainText)
    await expect(registertext).toContainText('Reg');

    //input has a value?(toHaveValue)
    const emailinput = await page.locator('#Email');
    await emailinput.fill('test@gmail.com');
    await expect(emailinput).toHaveValue('test@gmail.com');

    //element has count? (toHaveCount)
    const options = await page.locator("select[id='customerCurrency'] option");
    await expect(options).toHaveCount(2)











});

