exports.InventoryPage = class InventoryPage {
    constructor(page) {
      this.page = page;
      this.products = page.locator('.inventory_item');
      this.addToCartButtons = page.locator('button', { hasText: 'Add to cart' });
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.menuButton = page.locator('#react-burger-menu-btn');
      this.logoutButton = page.locator('#logout_sidebar_link');
    }
  
    async countProducts() {
      return await this.products.count();
    }
  
    async addFirstProductToCart() {
      await this.addToCartButtons.first().click();
    }
  
    async getCartCount() {
      return await this.cartBadge.textContent();
    }
  
    async logout() {
      await this.menuButton.click();
      await this.page.waitForTimeout(500);
      await this.logoutButton.click();
    }
  };
  