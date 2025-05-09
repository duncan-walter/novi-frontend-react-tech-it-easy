export default function sortTelevisionsByRefreshRateDescending(televisions) {
    televisions.sort((left, right) => {
        return right.refreshRate - left.refreshRate;
    });

    console.log("Televisions sorted by refresh rate (descending):");
    console.table(televisions);
}