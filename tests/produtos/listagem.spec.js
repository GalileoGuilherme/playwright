const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Listagem de produtos', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deve exibir a lista de produtos', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const count = await inventoryPage.countProducts();
    expect(count).toBeGreaterThan(0);
  });
});
