class AccessoriesPage {
    open() {
        cy.visit(`${Cypress.env('googleURL')}/collection/accessories_wall?hl=en-US`); 
    }

    get searchIcon() {
        return cy.get('div[aria-label="Search the Google store"]');
    }

    get searchInput() {
        return cy.get('div[role="search"] input');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`)
    }
}

export default new AccessoriesPage()