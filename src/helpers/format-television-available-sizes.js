import convertInchesToCentimeters from "./convert-inches-to-centimeters.js";

export default function formatTelevisionAvailableSizes(television) {
    let availableSizesString = "";

    for (let i = 0; i < television.availableSizes.length; i++) {
        const sizeInInches = television.availableSizes[i];
        const sizeInCentimeters = Math.round(convertInchesToCentimeters(sizeInInches))
        availableSizesString += `${sizeInInches} inches (${sizeInCentimeters}cm)`;

        // Ik voeg het scheidingsteken alleen toe wanneer de huidige iteratie niet het laatste item in de availableSizes array is.
        if (i < television.availableSizes.length - 1) {
            availableSizesString += " | ";
        }
    }

    return availableSizesString;
}