const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test.describe('Login', () => {
  test('Deve logar com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});
