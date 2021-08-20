import './SedeCard.css'

export default function SedeCard(props){

    return (
        <div className = "SedeCard grid item">
            <img src={props.sede.image} alt="Sede" />
            <p className = "name">{props.sede.name}</p>
            <p className = "author">{props.sede.adress}</p>
            <p className = "genre">{props.sede.image}</p>
        </div>
    )
}