class ProductPage {
    get buttonBuy() {
        return cy.get('div[data-test="pdp-bar"] button[data-test="cta"]');
    }
}

export default new ProductPage();