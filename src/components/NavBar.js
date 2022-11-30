export default function NavBar(props) {
    return (
        <div className="navbar">
            <img src={props.src} className="navbar--image"/>
            <h1 className="navbar--title">{props.title}</h1>
        </div>
    )
}