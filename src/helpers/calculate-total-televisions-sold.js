import { inventory } from '../constants/inventory.js';

export default function calculateTotalTelevisionsSold() {
    let totalSoldCount = 0;

    for (let i = 0; i < inventory.length; i++) {
        const inventoryItem = inventory[i];
        totalSoldCount += inventoryItem.sold;
    }

    return totalSoldCount;
}