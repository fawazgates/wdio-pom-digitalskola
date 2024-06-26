export default class InventoryPage {
    get title() { return $('.title'); }
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('.shopping_cart_badge'); }

    async addItemToCart() {
        await this.addToCartButton.click();
    }
}
