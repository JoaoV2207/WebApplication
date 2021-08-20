import './UserCard.css'

export default function UserCard(props){

    return (
        <div className = "UserCard grid item">
            <img src={props.user.image} alt="usuario" />
            <p className = "name">{props.user.name}</p>
            <p className = "author">{props.user.author}</p>
            <p className = "genre">{props.user.genre}</p>
            <p className = "description">{props.user.description}</p>
            <p className = "price">{props.user.price}</p>
        </div>
    )
}