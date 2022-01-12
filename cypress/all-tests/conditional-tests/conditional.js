import chance from "chance"

describe('Conditional operators exploration', () => {
    let age;
    
    beforeEach(() => {
        age = chance().age();
    });

    it('C1 Task #1: If usage', () => {
        if (age < 13) {
            cy.log(`${age} is child`);
        } else if (age < 20) {
            cy.log(`${age} is teen`);
        } else if (age < 66) {
            cy.log(`${age} is adult`);
        } else {
            cy.log(`${age} is senior`);
        }
    });

    it('C2 Task #2: Switch usage', () => {
        switch (age) {
            case 12: 
                cy.log(`${age} is child`);
                break;
            case 19:
                cy.log(`${age} is teen`);
                break;
            case 65:
                cy.log(`${age} is adult`);
                break;
            default:
                cy.log(`${age} to be implemented`);
        }
    });

    it('C3 Task #3: ? usage', () => {
        (age < 13) ? cy.log(`${age} is child`) : (age < 20) ? cy.log(`${age} is teen`) : (age < 66) ? cy.log(`${age} is adult`) : cy.log(`${age} is senior`);
    });
});