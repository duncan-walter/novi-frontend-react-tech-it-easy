export default function sortTelevisionsByScreenSizeDescending(televisions) {
    televisions.sort((left, right) => {
        // De spread operator (...) is blijkbaar nodig omdat de Math.max() methode niet met array's kan werken. Vreemd...
        const leftMaximumSize = Math.max(...left.availableSizes);
        const rightMaximumSize = Math.max(...right.availableSizes);

        return rightMaximumSize - leftMaximumSize;
    });

    console.log("Televisions sorted by screen size (descending):");
    console.table(televisions);
}