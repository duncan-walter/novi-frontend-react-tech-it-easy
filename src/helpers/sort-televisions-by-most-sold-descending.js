export default function sortTelevisionsByMostSoldDescending(televisions) {
    const sortedTelevisions = [...televisions].sort((left, right) => {
        return right.sold - left.sold;
    });

    console.log("Televisions sorted by most sold (descending):");
    // WOW, console.table kijkt echt een stuk fijner!!!
    console.table(sortedTelevisions);
}