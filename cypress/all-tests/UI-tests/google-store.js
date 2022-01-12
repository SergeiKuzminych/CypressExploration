import SearchResultsPage from "../../page-objects/searchResultsPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"
import ProductPage from "../../page-objects/productPage"
import TypeSelectPage from "../../page-objects/typeSelectPage";
import CartPage from "../../page-objects/cartPage";
import chance from "chance"
import productsData from "../../fixtures/google-products.json";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

describe('Google Store Practical Task #1', () => {
  productsData.products.forEach((product) => {
    it(`C4 Task #1: ${product.name}`, () => {
      cy.log('GIVEN User is at Accessories page');
      AccessoriesPage.open();
      cy.log('AND User searches for a product');
      AccessoriesPage.performSearch(product.name);
      cy.log('AND User clicks on the product');
      SearchResultsPage.getProductByDocId(product.id).click();
      cy.log('WHEN User clicks button "Buy"');
      ProductPage.buttonBuy.click();
      
      let cartProductName;
      let price;
      if (product.types) {
        let type = chance().pickone(product.types);
        cartProductName = `${product.name} ${type.color}`;
        price = type.price.toFixed(2);
        cy.log('AND User selects type of the product');
        TypeSelectPage.getButtonAddByType(type.color).click();
        cy.log('AND User clicks button "Go To Cart"');
        TypeSelectPage.buttonGoToCart.click();
      } else {
        cartProductName = product.name;
        price = product.price.toFixed(2);
      }
      cy.log('THEN Only the product presented in Cart');
      CartPage.addedProductsNames.should('have.length', 1);
      cy.log('AND The product has its name and type in caption');
      CartPage.addedProductsNames.should('have.text', cartProductName);
      cy.log('AND Subtotal price is equal to the products price');
      CartPage.subtotalPrice.should('have.text', `$${price}`);
      cy.log('AND Product price in cart is equal to the original products price');
      CartPage.addedProductsPrices.should('have.text', `$${price}`);
      cy.log('AND Selected quantity of the product is 1');
      CartPage.addedProductQuantity.invoke('attr', 'data-selected-quantity').should('eq', '1');
    });
  });
});

describe('Google Store Practical Task #2', () => {
  let product = chance().pickone(productsData.products);
  let cartProductName;
  let price;

  before(() => {
    cy.log('GIVEN Item added to the Cart');
    AccessoriesPage.open();
    AccessoriesPage.performSearch(product.name);
    SearchResultsPage.getProductByDocId(product.id).click();
    ProductPage.buttonBuy.click();

    if (product.types) {
      let type = chance().pickone(product.types);
      cartProductName = `${product.name} ${type.color}`;
      price = type.price.toFixed(2);
      TypeSelectPage.getButtonAddByType(type.color).click();
      TypeSelectPage.buttonGoToCart.should('be.visible');
    } else {
      cartProductName = product.name;
      price = product.price.toFixed(2);
      CartPage.addedProductsNames.should('be.visible');
    }
  });
  

  it(`C5 Task #2: ${product.name}`, () => {
    cy.log('WHEN Cart page is opened');
    CartPage.open();

    cy.log('THEN Only the product presented in Cart');
    CartPage.addedProductsNames.should('have.length', 1);
    cy.log('AND The product has its name and type in caption');
    CartPage.addedProductsNames.should('have.text', cartProductName);
    cy.log('AND Subtotal price is equal to the products price');
    CartPage.subtotalPrice.should('have.text', `$${price}`);
    cy.log('AND Product price in cart is equal to the original products price');
    CartPage.addedProductsPrices.should('have.text', `$${price}`);
    cy.log('AND Selected quantity of the product is 1');
    CartPage.addedProductQuantity.invoke('attr', 'data-selected-quantity').should('eq', '1');

    cy.log('WHEN User sets quantity of the product to 2');
    CartPage.addedProductQuantity.select('2');
    cy.log('THEN Selected quantity of the product is 2');
    CartPage.addedProductQuantity.invoke('attr', 'data-selected-quantity').should('eq', '2');
    cy.log('AND Subtotal price is equal to the products price multiplied by 2');
    CartPage.subtotalPrice.should('have.text', `$${(price * 2).toFixed(2)}`);
  });
});