import chance from "chance"
import {printPlanets, getPlanetsWithDistance, sortPlanetsByRadius ,sortPlanetsByName} from "../../utils/helper"
import ExchangePage from "../../page-objects/exchangePage"

describe('Map exploration', () => {
    it('Task #1 & #2: Create a Map and print it', () => {
        let planets = new Map();
        planets.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planets.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planets.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planets.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        planets.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planets.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planets.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planets.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        planets.forEach((value, key) => {
            cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ': ' + value[objKey]).join(', '))
        });          
    });

    it('Task #3: Get and print a key-value pair from a Map', () => {
        let planets = new Map();
        planets.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planets.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planets.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planets.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        planets.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planets.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planets.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planets.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        cy.log("Saturn: " + Object.keys(planets.get("Saturn")).map(objKey => objKey + ': ' + planets.get("Saturn")[objKey]).join(', '));
    });

    it('Task #4: Print the size of a Map', () => {
        let planets = new Map();
        planets.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planets.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planets.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planets.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        planets.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planets.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planets.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planets.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        cy.log(planets.size);
    });

    it('Task #5: Find an element in a Map', () => {
        let planets = new Map();
        planets.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planets.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planets.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planets.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        planets.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planets.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planets.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planets.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        let planetsSet = new Set(['Mercury', 'Not Mercury']);
        planetsSet.forEach((planet) => {
            cy.log(planet + ' is in Map: ' + planets.has(planet));
        });
    });

    it('Task #6: Delete an element from a Map', () => {
        let planets = new Map();
        planets.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planets.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planets.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planets.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        planets.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planets.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planets.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planets.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        planets.delete('Uranus');
        cy.log(planets.size);
    });

    it('Task #7: Merge two Maps', () => {
        let planetsFirst = new Map();
        planetsFirst.set('Mercury', {radius: 2440, density: 5.43, distance: 0.395});
        planetsFirst.set('Venus', {radius: 6052, density: 5.24, distance: 0.723});
        planetsFirst.set('Earth', {radius: 6378, density: 5.52, distance: 1});
        planetsFirst.set('Mars', {radius: 3396, density: 3.93, distance: 1.53});
        let planetsSecond = new Map();
        planetsSecond.set('Jupiter', {radius: 71492, density: 1.33, distance: 5.21});
        planetsSecond.set('Saturn', {radius: 60268, density: 0.69, distance: 9.551});
        planetsSecond.set('Uranus', {radius: 25559, density: 1.27, distance: 19.213});
        planetsSecond.set('Neptune', {radius: 24764, density: 1.64, distance: 30.07});
        cy.log(new Map([...planetsFirst, ...planetsSecond]));
    });

    it('Task #8: Print properties of an Object', () => {
        let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395};
        for (let key in planet) {
            cy.log(`${key}: ${planet[key]}`);
        }
    });
});