import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';

describe('SauceDemo E2E', () => {
    it('should login with valid credentials and add item to cart', async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        
        // Buka halaman login dan login dengan kredensial yang valid
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        // Validasi bahwa user berada di dashboard setelah login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(inventoryPage.title).toHaveText('Products');

        // Tambahkan item ke cart
        await inventoryPage.addItemToCart();

        // Validasi bahwa item sukses ditambahkan ke cart
        await expect(inventoryPage.cartBadge).toBeDisplayed();
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });
});
