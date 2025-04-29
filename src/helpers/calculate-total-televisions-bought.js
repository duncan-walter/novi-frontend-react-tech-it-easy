import { inventory } from '../constants/inventory.js';

export default function calculateTotalTelevisionsBought() {
    let totalBoughtCount = 0;

    for (let i = 0; i < inventory.length; i++) {
        const inventoryItem = inventory[i];
        totalBoughtCount += inventoryItem.originalStock;
    }

    return totalBoughtCount;
}