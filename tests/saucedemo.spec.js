const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test.describe('Testes com Page Object no SauceDemo', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deve carregar produtos após login', async () => {
    const count = await inventoryPage.countProducts();
    expect(count).toBeGreaterThan(0);
  });

  test('Deve adicionar um produto ao carrinho', async () => {
    await inventoryPage.addFirstProductToCart();
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
  });

  test('Deve fazer logout com sucesso', async ({ page }) => {
    await inventoryPage.logout();
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
