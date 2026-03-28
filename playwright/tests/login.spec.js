const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login();

  await expect(page).toHaveURL(/inventory/);
});