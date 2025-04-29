import './App.css';
import calculateTotalTelevisionsSold from "./helpers/calculate-total-televisions-sold.js";
import calculateTotalTelevisionsBought from "./helpers/calculate-total-televisions-bought.js";
import calculateTotalTelevisionsRemaining from "./helpers/calculate-total-televisions-remaining.js";

function App() {
    const totalTelevisionsSold = calculateTotalTelevisionsSold();
    const totalTelevisionsBought = calculateTotalTelevisionsBought();
    const totalTelevisionsRemaining = calculateTotalTelevisionsRemaining();

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
    </>)
}

export default App