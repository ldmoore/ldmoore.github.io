import "./CardInfo.css";

export default function CardInfo({ item, nullAction }) {
    return (
        <div className="CardInfo App-list-parent">
            <div id="left" className="App-list-column">
                <img src={item.icon} alt="Logo"></img>
                <h3>{item.name}</h3>
                <button onClick={nullAction}>Back to Home</button>
            </div>
            <div id="right" className="App-list-column">
                <p style={{whiteSpace: "pre-wrap"}}>{item.long_description}</p>
                {item.large_img ? (<img class="img-display-normal" src={item.large_img} alt="Large Logo"></img>) : null}
                {item.links && Object.keys(item.links).length ? (
                    <div>
                        <h4>Links</h4>
                        <ul>
                            {Object.keys(item.links).map((linkName, index) => {
                                return <li key={index}><a target="about:blank" href={item.links[linkName]}>{linkName}</a></li>
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    )
}