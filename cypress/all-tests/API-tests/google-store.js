describe('S2 API google store', () => {
    before(() => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').then(response => {
            cy.wrap(response.body.products).as('productsData');
        });
    });

    it('C33 Get products (before + it)', () => {
        cy.get('@productsData').then((productsData) => {
            cy.log("Total products found: " + productsData.length);
            cy.log("First product found: " + Object.keys(productsData[0]).map(objKey => objKey + ': ' + productsData[0][objKey]).join(', '));
        });
    });

    it('C34 Get products (it only)', () => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').then(response => {
            cy.log("Total products found: " + response.body.products.length);
            cy.log("First product found: " + Object.keys(response.body.products[0]).map(objKey => objKey + ': ' + response.body.products[0][objKey]).join(', '));
        });
    });
})