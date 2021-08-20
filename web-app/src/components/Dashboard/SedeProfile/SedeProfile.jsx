import {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './SedeProfile.css';

export default function SedeProfile(props) {
    const history = useHistory();
    const [sede, setSede] = useState();
    let {id} = useParams();

    const disableButton = () => (props.user.role !== 'admin')  ? true : false;
    useEffect(()=>
        axios.get(`/sedes/${id}`)
        .then((res) => setSede(res.data))
        .catch((err) => console.log(err.response)),
        [id])
    const handleDelete = (event) =>{
        event.preventDefault();
        axios.delete(`/sedes/${id}`)
        .then((res) => history.push('/dashboard/sedes'))
        .catch((err) => console.log(err.response));
    }

    return (
        <div className = "SedeProfile">
            <Card style = {{width: '20rem'}}>
                <Card.Img variant = "top" src = {sede ? sede.image: ''}/>
                <Card.Body>
                    <Card.Title>{sede ? sede.name: ''}</Card.Title>
                    <Card.Subtitle>{sede ? sede.adress: ''}</Card.Subtitle>
                    <Card.Text>{sede ? sede.image: ''}</Card.Text>
                    <Link style = {disableButton() ? {pointerEvents: 'none'}:null} to={`/dashboard/sedes/edit/${id}`}>
                        <Button disable = {disableButton() ? true : false} variant="outline-warning">
                            Editar Sede
                        </Button>
                    </Link>
                    <Button disable = {disableButton() ? true : false} onClick={handleDelete} variant="outline-danger">
                        Deletar Sede
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}