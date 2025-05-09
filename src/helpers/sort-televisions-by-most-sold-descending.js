export default function sortTelevisionsByMostSoldDescending(televisions) {
    televisions.sort((left, right) => {
        return right.sold - left.sold;
    });

    console.log("Televisions sorted by most sold (descending):");
    // WOW, console.table kijkt echt een stuk fijner!!!
    console.table(televisions);
}