import {inventory} from './inventory.js';

export default function showOutcomeInConsole() {
    // Deel 2 opdracht 1a
    const televisionNames = inventory.map((television) => {
        return television.name;
    });
    console.log('All television names:');
    console.log(televisionNames);

    // Deel 2 opdracht 1b
    const soldOutTelevisions = inventory.filter(television => television.originalStock === television.sold);
    console.log('Sold out television(s):');
    console.log(soldOutTelevisions);

    // Deel 2 opdracht 1c
    const specificTelevision = inventory.find(television => television.type === "NH3216SMART");
    console.log(`Specific television by type (${specificTelevision.type}):`);
    console.log(specificTelevision);

    // Deel 2 opdracht 1d
    const sportsLoverCompatibleTelevisions = inventory.map(television => {
        return {
            name: television.name,
            suitable: television.refreshRate >= 100
        }
    });
    console.log("Information about sports lover compatible televisions:")
    console.log(sportsLoverCompatibleTelevisions);

    // Deel 2 opdracht 1e
    const largeTelevisions = inventory.filter(television => {
        const lastAvailableSizeIndex = television.availableSizes.length - 1;
        // Ik sorteer de beschikbare schermgroottes oplopend, de grootste schermgrootte staat dus achteraan.
        // Achteraf gezien had ik ook een Math.max(television.availableSizes) aanroep kunnen doen, maar voor nu dit.
        television.availableSizes.sort();

        // Omdat de grootste schermgrootte achteraan staat hoef ik alleen maar te kijken of die waarde groter dan of gelijk aan 65 is.
        if (television.availableSizes[lastAvailableSizeIndex] >= 65) {
            return television;
        }
    });
    console.log("Televisions that are available in size 65 inch or larger:")
    console.log(largeTelevisions);

    // Deel 2 opdracht 1f
    //Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.
    const ambilightTelevisions = inventory.filter(television => {
        // Ik heb dit in een block gezet omdat de regel mij anders te lang werd.
        return television.options.find(option => option.name === "ambiLight").applicable === true
    });
    console.log("Television that have ambilight:");
    console.log(ambilightTelevisions);
}