class SearchResultsPage{
    getProductByDocId(docId) {
        return cy.get(`div.search-results-grid a[href="/product/${docId}"]`);
    }
}

export default new SearchResultsPage();