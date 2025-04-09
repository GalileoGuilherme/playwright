const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Carrinho', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deve adicionar produto ao carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstProductToCart();
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
  });
});
