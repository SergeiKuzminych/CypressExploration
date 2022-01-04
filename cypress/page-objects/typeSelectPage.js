class TypeSelectPage {
    get buttonGoToCart() {
        return cy.get("button[data-test-go-to-cart]");
    }

    getButtonAddByType(type) {
        return cy.get(`div[data-test-product-card="${type}"] button[data-test="atc"]`);
    }
}

export default new TypeSelectPage();