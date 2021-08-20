import {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './UserProfile.css';

export default function UserProfile(props) {
    const history = useHistory();
    const [user, setUser] = useState();
    let {id} = useParams();

    const disableButton = () => (props.user.role !== 'admin') ? true : false;
    useEffect(()=>
        axios.get(`/users/user/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err.response))
        [id])
    const handleDelete = (event) =>{
        event.preventDefault();
        axios.delete(`/users/user/${id}`)
        .then((res) => history.push('/dashboard/users'))
        .catch((err) =>console.log(err.response));
    }

    return (
        <div className = "UserProfile">
            <Card style = {{width: '20rem'}}>
                <Card.Img variant = "top" src = {user ? user.image: ''}/>
                <Card.Body>
                    <Card.Title>{user ? user.name: ''}</Card.Title>
                    <Card.Subtitle>{user ? user.role: ''}</Card.Subtitle>
                    <Card.Text>{user ? user.email: ''}</Card.Text>
                    <Card.Text>{user ? user.condition: ''}</Card.Text>
                    <Link style = {disableButton() ? {pointerEvents: 'none'}:null} to={`/dashboard/users/edit/${id}`}>
                        <Button disable = {disableButton() ? true : false} variant="outline-warning">
                            Editar Usuario
                        </Button>
                    </Link>
                    <Button disable = {disableButton() ? true : false} onClick={handleDelete} variant="outline-danger">
                        Deletar Usuario
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}