import calculateTotalTelevisionsSold from "./calculate-total-televisions-sold.js";
import calculateTotalTelevisionsBought from "./calculate-total-televisions-bought.js";

export default function calculateTotalTelevisionsRemaining() {
    return calculateTotalTelevisionsBought() - calculateTotalTelevisionsSold();
}