import './App.css';

// Data
import {bestSellingTv, inventory} from "./constants/inventory.js";

// Calculate helpers
import calculateTotalTelevisionsSold from "./helpers/calculate-total-televisions-sold.js";
import calculateTotalTelevisionsBought from "./helpers/calculate-total-televisions-bought.js";
import calculateTotalTelevisionsRemaining from "./helpers/calculate-total-televisions-remaining.js";
import calculateTelevisionRemainingStock from "./helpers/calculate-television-remaining-stock.js";

// Format helpers
import formatTelevisionName from "./helpers/format-television-name.js";
import formatTelevisionPrice from "./helpers/format-television-price.js";
import formatTelevisionAvailableSizes from "./helpers/format-television-available-sizes.js";

// Sort helpers
import sortTelevisionsByMostSoldDescending from "./helpers/sort-televisions-by-most-sold-descending.js";
import sortTelevisionsByPriceAscending from "./helpers/sort-televisions-by-price-ascending.js";
import sortTelevisionsByRefreshRateDescending from "./helpers/sort-televisions-by-refresh-rate-descending.js";
import sortTelevisionsByScreenSizeDescending from "./helpers/sort-televisions-by-screen-size-descending.js";

// "oefenbestand"
import showOutcomeInConsole from "./constants/oefenbestand.js";

// Images
import checkImage from "./assets/check.png";
import minusImage from "./assets/minus.png";
import outOfStockImage from "./assets/out-of-stock.png";

function App() {
    showOutcomeInConsole();

    return (<>
        <div className="outer-container">
            <div className="inner-container">
                <h1>Tech it easy dashboard</h1>
                <section className="sales-overview">
                    <h2>Verkoopoverzicht</h2>
                    <div className="sales-overview-cards">
                        <article className="sales-overview-card green-card">
                            <p>Aantal verkochte producten:</p>
                            <span>{calculateTotalTelevisionsSold()}</span>
                        </article>
                        <article className="sales-overview-card blue-card">
                            <p>Aantal ingekochte producten:</p>
                            <span>{calculateTotalTelevisionsBought()}</span>
                        </article>
                        <article className="sales-overview-card red-card">
                            <p>Aantal te verkopen producten:</p>
                            <span>{calculateTotalTelevisionsRemaining()}</span>
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
                            <img src={bestSellingTv.sourceImg} alt="Best selling television"/>
                        </span>
                        <div className="television-information">
                            <p className="television-name">{formatTelevisionName(bestSellingTv)}</p>
                            <p className="television-price">{formatTelevisionPrice(bestSellingTv)}</p>
                            <p className="television-available-sizes">{formatTelevisionAvailableSizes(bestSellingTv)}</p>
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
                        <button onClick={sortTelevisionsByMostSoldDescending(inventory)}>Meest verkocht eerst</button>
                        <button onClick={sortTelevisionsByPriceAscending(inventory)}>Goedkoopste eerst</button>
                        <button onClick={sortTelevisionsByRefreshRateDescending(inventory)}>Meest geschikt voor sport eerst</button>
                        <button onClick={sortTelevisionsByScreenSizeDescending(inventory)}>Grootste schermgroottes eerst</button>
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
                                            <img src={outOfStockImage}
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