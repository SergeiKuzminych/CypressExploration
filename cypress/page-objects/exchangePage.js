class ExchangePage {
    open() {
        cy.visit(Cypress.env('exchangeURL')); 
    }

    get fromInput() {
        return cy.get('#midmarketFromCurrency');
    }

    get toInput() {
        return cy.get('#midmarketToCurrency');
    }

    get convertButton() {
        return cy.get("form button[type='submit']");
    }

    get convertResult() {
        return cy.get("p[class*='result__BigRate']");
    }

    performConvertation(currencyToConvert) {
        this.toInput.type(`${currencyToConvert}{enter}`)
        this.convertButton.click();
        return this.convertResult;
    }
}

export default new ExchangePage()