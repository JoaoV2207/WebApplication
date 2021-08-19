import {useState, useEffect} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './ProductProfile.css';

export default function ProductProfile(props) {
    const history = useHistory();
    const [product, setProduct] = useState();
    let {id} = useParams();

    const disableButton = () => (props.role !== 'admin') ? true : false;
    useEffect(()=>
        axios.get(`/products/${id}`))
        .then((res) => setProduct(res.data))
        .cath((err) => console.log(err.response))
    const handleDelete = (event) =>{
        event.preventDefault();
        axios.delete(`/products/${id}`)
        .then((res) => history.push('/dashboard/products'))
        .catch((err) =>console.log(err.response));
    }

    return (
        <div className = "ProductProfile">
            <Card style = {{width: '20rem'}}>
                <Card.Img variant = "top" src = {product ? product.image: ''}/>
                <Card.Body>
                    <Card.Title>{product ? product.name: ''}</Card.Title>
                    <Card.Subtitle>{product ? product.author: ''}</Card.Subtitle>
                    <Card.Subtitle>{product ? product.genre: ''}</Card.Subtitle>
                    <Card.Subtitle>{product ? product.price: ''}</Card.Subtitle>
                    <Card.Text>{product ? product.description: ''}</Card.Text>
                    <Card.Text>{product ? product.image: ''}</Card.Text>
                    <Link style = {disableButton() ? {pointerEvents: 'none'}:null} to={`/dashboard/products/edit/${id}`}>
                        <Button disable = {disableButton() ? true : false} variant="outline-warning">
                            Editar Produto
                        </Button>
                    </Link>
                    <Button disable = {disableButton() ? true : false} onClick={handleDelete} variant="outline-danger">
                        Deletar Produto
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}