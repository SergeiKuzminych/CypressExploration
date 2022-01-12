import SearchResultsPage from "../../page-objects/searchResultsPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('UI Tests', () => {
    before(() => {
      cy.fixture('product').then(data => {
        cy.wrap(data).as('productData');
      })
    })

    it('C6 Positive: Product search PO', () => {
      cy.get('@productData').then(productData => {
        AccessoriesPage.open();
        AccessoriesPage.performSearch(productData.name);
        SearchResultsPage.getProductByDocId(productData.id).should('exist');
      })
    })
})