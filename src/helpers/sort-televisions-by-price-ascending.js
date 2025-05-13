export default function sortTelevisionsByPriceAscending(televisions) {
    const sortedTelevisions = [...televisions].sort((left, right) => {
        return left.price - right.price;
    });

    console.log("Televisions sorted by price (ascending):");
    console.table(sortedTelevisions);
}