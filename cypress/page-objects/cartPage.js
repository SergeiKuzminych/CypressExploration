class CartPage {
    open() {
        cy.visit(`${Cypress.env('googleURL')}/cart`); 
    }

    get addedProductsNames() {
        return cy.get("a[data-test-lineitem-title]");
    }

    get addedProductsPrices() {
        return cy.get("p[data-test-line-item-price]");
    }

    get addedProductQuantity() {
        return cy.get("select[data-test-item-qty-selection]");
    }

    get subtotalPrice() {
        return cy.get("span[data-test-price-subtotal]");
    }
}

export default new CartPage();