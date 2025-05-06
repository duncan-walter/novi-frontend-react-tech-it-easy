import './App.css';
import {bestSellingTv} from "./constants/inventory.js";
import calculateTotalTelevisionsSold from "./helpers/calculate-total-televisions-sold.js";
import calculateTotalTelevisionsBought from "./helpers/calculate-total-televisions-bought.js";
import calculateTotalTelevisionsRemaining from "./helpers/calculate-total-televisions-remaining.js";
import formatTelevisionName from "./helpers/format-television-name.js";
import formatTelevisionPrice from "./helpers/format-television-price.js";
import formatTelevisionAvailableSizes from "./helpers/format-television-available-sizes.js";
import checkImage from "./assets/check.png";
import minusImage from "./assets/minus.png";
import showOutcomeInConsole from "./constants/oefenbestand.js";

function App() {
    showOutcomeInConsole();
    const totalTelevisionsSold = calculateTotalTelevisionsSold();
    const totalTelevisionsBought = calculateTotalTelevisionsBought();
    const totalTelevisionsRemaining = calculateTotalTelevisionsRemaining();
    const bestSellingTelevision = bestSellingTv;

    function consoleLogButtonText(event) {
        console.log(event.target.textContent);
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
                        <button onClick={consoleLogButtonText}>Meest verkocht eerst</button>
                        <button onClick={consoleLogButtonText}>Goedkoopste eerst</button>
                        <button onClick={consoleLogButtonText}>Meest geschikt voor sport eerst</button>
                    </div>
                </section>
            </div>
        </div>
    </>)
}

export default App