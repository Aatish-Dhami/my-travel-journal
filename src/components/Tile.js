export default function Tile(props) {
    return (
        <div className="tile">
            <img src={props.item.imageUrl}/>
            <div className="tile--content">   
                <div className="tile--location">
                    <img src="../images/LocationIcon.png"/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="tile--title">{props.item.title}</h2>
                <h4 className="tile--date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="tile--desc">{props.item.description}</p>
            </div>
        </div>
    )
}