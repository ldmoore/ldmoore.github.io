import CardFlag from "./CardFlag";
import "./HomeCard.css";

export default function HomeCard({ item, selectAction }) {
    return (
        <div className="Card App-list-column">
        <header className="Card-header">
            <img src={item.icon} className="Card-img" alt="Logo" />
            <h3>{item.name}</h3>
            <p>{item.short_description}</p>
            <div>
            {item.features.map((feature, index) => {
                return <CardFlag text={feature} />;
            })}
            </div>
            <button onClick={selectAction}>Learn More</button>
        </header>
        </div>
    );
}