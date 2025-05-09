import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateTotalTelevisionsSold from "./helpers/calculate-total-televisions-sold.js";
import calculateTotalTelevisionsBought from "./helpers/calculate-total-televisions-bought.js";
import calculateTotalTelevisionsRemaining from "./helpers/calculate-total-televisions-remaining.js";
import formatTelevisionName from "./helpers/format-television-name.js";
import formatTelevisionPrice from "./helpers/format-television-price.js";
import formatTelevisionAvailableSizes from "./helpers/format-television-available-sizes.js";
import checkImage from "./assets/check.png";
import minusImage from "./assets/minus.png";
import outOfStock from "./assets/out-of-stock.png";
import showOutcomeInConsole from "./constants/oefenbestand.js";

function App() {
    showOutcomeInConsole();
    const totalTelevisionsSold = calculateTotalTelevisionsSold();
    const totalTelevisionsBought = calculateTotalTelevisionsBought();
    const totalTelevisionsRemaining = calculateTotalTelevisionsRemaining();
    const bestSellingTelevision = bestSellingTv;

    function sortTelevisionsByMostSoldDescending() {
        inventory.sort((left, right) => {
           return right.sold - left.sold;
        });

        console.log("Televisions sorted by most sold (descending):");
        // WOW, console.table kijkt echt een stuk fijner!!!
        console.table(inventory);
    }

    function sortTelevisionsByPriceAscending() {
        inventory.sort((left, right) => {
            return left.price - right.price;
        });

        console.log("Televisions sorted by price (ascending):");
        console.table(inventory);
    }

    function sortTelevisionsByRefreshRateDescending() {
        inventory.sort((left, right) => {
            return right.refreshRate - left.refreshRate;
        });

        console.log("Televisions sorted by refresh rate (descending):");
        console.table(inventory);
    }

    function sortTelevisionsByScreenSizeDescending() {
        inventory.sort((left, right) => {
            // De spread operator (...) is blijkbaar nodig omdat de Math.max() methode niet met array's kan werken. Vreemd...
            const leftMaximumSize = Math.max(...left.availableSizes);
            const rightMaximumSize = Math.max(...right.availableSizes);

            return rightMaximumSize - leftMaximumSize;
        });

        console.log("Televisions sorted by screen size (descending):");
        console.table(inventory);
    }

    function calculateTelevisionRemainingStock(television) {
        return television.originalStock - television.sold;
    }

    return (<>
        <div className="outer-container">
            <div className="inner-container">
                <h1>Tech it easy dashboard</h1>
                <section className="sales-overview">
                    <h2>Verkoopoverzicht</h2>
                    <div className="sales-overview-cards">
                        <article className="sales-overview-card green-card">
                            <p>Aantal verkochte producten:</p>
                            <span>{totalTelevisionsSold}</span>
                        </article>
                        <article className="sales-overview-card blue-card">
                            <p>Aantal ingekochte producten:</p>
                            <span>{totalTelevisionsBought}</span>
                        </article>
                        <article className="sales-overview-card red-card">
                            <p>Aantal te verkopen producten:</p>
                            <span>{totalTelevisionsRemaining}</span>
                        </article>
                    </div>
                </section>
            </div>
        </div>
        <div className="outer-container">
            <div className="inner-container">
                <section className="best-selling-television">
                    <h2>Best verkochte TV</h2>
                    <div className="best-selling-television-card">
                        <span className="television-image-wrapper">
                            <img src={bestSellingTelevision.sourceImg} alt="Best selling television"/>
                        </span>
                        <div className="television-information">
                            <p className="television-name">{formatTelevisionName(bestSellingTelevision)}</p>
                            <p className="television-price">{formatTelevisionPrice(bestSellingTelevision)}</p>
                            <p className="television-available-sizes">{formatTelevisionAvailableSizes(bestSellingTelevision)}</p>
                            <div className="television-features">
                                <span><img src={checkImage} alt="Check"/>wifi</span>
                                <span><img src={minusImage} alt="Minus"/>speech</span>
                                <span><img src={checkImage} alt="Check"/>hdr</span>
                                <span><img src={checkImage} alt="Check"/>bluetooth</span>
                                <span><img src={minusImage} alt="Minus"/>ambilight</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div className="outer-container">
            <div className="inner-container">
                <section className="all-televisions">
                    <h2>Alle TV&apos;s</h2>
                    <div>
                        <button onClick={sortTelevisionsByMostSoldDescending}>Meest verkocht eerst</button>
                        <button onClick={sortTelevisionsByPriceAscending}>Goedkoopste eerst</button>
                        <button onClick={sortTelevisionsByRefreshRateDescending}>Meest geschikt voor sport eerst</button>
                        <button onClick={sortTelevisionsByScreenSizeDescending}>Grootste schermgroottes eerst</button>
                        <ul className="television-brands">
                            {inventory.map((television) => {
                                return <li key={television.id}>{television.brand}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        {inventory.map((television) => {
                            // Ik kreeg de formatting van mijn return niet fijn.
                            // Maar ik kwam er achter dat je de hele return kan wrappen met haakjes.
                            // Aleen weet ik niet of dit per conventie is?
                            return (
                                <div key={television.id} className="television-card">
                                    <span className="television-image-wrapper">
                                        <img src={television.sourceImg} alt="Television"/>
                                        {calculateTelevisionRemainingStock(television) < 1 &&
                                            <img src={outOfStock}
                                                 className="television-out-of-stock"
                                                 alt="Television"/>}
                                    </span>
                                    <div className="television-information">
                                        <p className="television-name">{formatTelevisionName(television)}</p>
                                        <p className="television-price">{formatTelevisionPrice(television)}</p>
                                        <p className="television-available-sizes">{formatTelevisionAvailableSizes(television)}</p>
                                        <div className="television-features">
                                            {television.options.map((option) => {
                                                return (
                                                    // Hier stond eerst een if-else statement die checkte of
                                                    // de option.applicable true of false was. Op basis van die property
                                                    // werd er een span element met de juiste afbeelding getoond.
                                                    // Maar dat was veel dubbele code. Dus heb ik een ternary operator
                                                    // in het src attribuut van het image element gebruikt.
                                                    //
                                                    // Volgens mij mag ik de option.name property als key gebruiken.
                                                    // Omdat deze uniek binnen deze "loop" zal moeten zijn.
                                                    //
                                                    // Waarom krijg ik de volgende waarschuwing in mijn IDE?
                                                    // Type {} is not assignable to type string | undefined
                                                    // Is dit wel de juiste manier?
                                                    <span key={option.name}>
                                                        <img src={option.applicable ? checkImage : minusImage} alt="Check"/>
                                                        {option.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    </>)
}

export default App