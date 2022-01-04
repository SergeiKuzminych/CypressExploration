export const isSuperSet = (set, subset) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

export const union = (setA, setB) => {
    let union = new Set(setA);
    for (let elem of setB) {
        union.add(elem);
    }
    return union;
}

export const intersection = (setA, setB) => {
    let intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

export const difference = (setA, setB) => {
    let difference = new Set(setA);
    for (let elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

export const printPlanets = (planets) => {
    planets.forEach((planet) => {
        cy.log(Object.keys(planet).map(key => key + ': ' + planet[key]).join(', '));
    });
}

export const getPlanetsWithDistance = (planets, distance) => {
    return planets.filter(planet => planet.distance > distance);
}

export const sortPlanetsByRadius = (planets, asc = true) => {
    if (asc) {
        return planets.sort((a, b) => {return a.radius - b.radius});
    } else {
        return planets.sort((a, b) => {return b.radius - a.radius});
    }  
}

export const sortPlanetsByName = (planets, asc = true) => {
    if (asc) {
        return planets.sort((a, b) => {
            if (a.planet > b.planet) {
              return 1;
            }
            if (a.planet < b.planet) {
              return -1;
            }
            return 0;
        });
    } else {
        return planets.sort((a, b) => {
            if (a.planet < b.planet) {
              return 1;
            }
            if (a.planet > b.planet) {
              return -1;
            }
            return 0;
        });
    }  
}