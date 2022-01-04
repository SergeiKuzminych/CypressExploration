import chance from "chance"
import {isSuperSet, union, intersection, difference} from "../../utils/helper"

describe('Set exploration', () => {
    it('Task #1: Create a Set', () => {
        let currencySet = new Set(['USD', 'RUR', 'BYN']);
        cy.log(currencySet);
        expect(currencySet.size).to.be.equal(3);
    });

    it('Task #2: Print a Set', () => {
        let currencySet = new Set(['USD', 'RUR', 'BYN']);
        currencySet.forEach(currency => {
            cy.log(currency);
        });
    });

    it('Task #3: Add elements to a Set', () => {
        let currencySet = new Set(['USD', 'RUR', 'BYN']);
        currencySet.add('USD');
        currencySet.add('AUD');
        currencySet.add('BYN');
        currencySet.add('EUR');
        currencySet.forEach(currency => {
            cy.log(currency);
        });
        expect(currencySet.size).to.be.equal(5);
    });

    it('Task #4: Check elements in a Set', () => {
        let currencySet = new Set(['USD', 'RUR', 'BYN']);
        cy.log(`Set has USD currency: ${currencySet.has('USD')}.`);
        currencySet.delete('USD');
        cy.log(`Set has USD currency: ${currencySet.has('USD')}.`);
    });

    it('Task #5: Pick element(s) from a Set', () => {
        let currencySet = new Set(['USD', 'RUR', 'BYN', 'AUD', 'EUR', 'CNY', 'JPY', 'GBP']);
        cy.log(chance().pickone(Array.from(currencySet)));
        cy.log(chance().pickset(Array.from(currencySet), chance().integer({min: 1, max: currencySet.size})));
    });

    it('Task #6: Custom functions', () => {
        let currencySetA = new Set(['USD', 'RUR', 'BYN', 'AUD', 'EUR', 'CNY', 'JPY', 'GBP']);
        let currencySetB = new Set(['USD', 'CZK', 'BYN', 'BYR', 'MNT', 'KRW', 'JPY', 'TRY']);
        let currencySubSetA = new Set(['USD', 'BYN', 'AUD', 'GBP']);
        cy.log(isSuperSet(currencySetA, currencySubSetA));
        cy.log(union(currencySetA, currencySetB));
        cy.log(intersection(currencySetA, currencySetB));
        cy.log(difference(currencySetA, currencySetB));
    });
});