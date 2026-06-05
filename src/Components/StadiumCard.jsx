const StadiumCard = ({ stadium }) => {
    return(
        <div className="stadium-card">
            <img className="stadium-img" src={stadium.img} alt={stadium.name} />
            <h3 className="stadium-name">{stadium.name}</h3>
            <div className="stadium-loc">{stadium.city}, {stadium.country} </div>

            <p className="stadium-fact">{stadium.fact}</p>

            <ul className="stadium-stats">
                <li>Capacity:{stadium.capacity}</li>
                <li>Opened:{stadium.opened}</li>
            </ul>
            <a className="stadium-link" href={stadium.url} target="_blank" rel="noreferrer">
             Learn more →
            </a>

        </div>
    )
}
export default StadiumCard