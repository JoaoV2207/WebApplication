import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useParams} from 'react-router;'

import './AlterarProduto.css';

export default function AlterarProduto(){
    const [formValues, setFormValues] = useState({
        name: '',
        author: '',
        genre: '',
        description:'',
        image: '',
        price: ''
    })
    const inputChange = (event) =>{
        if (event.target.name === "name")
            setFormValues({...formValues, name:event.target.value})
        if (event.target.name === "author")
            setFormValues({...formValues, author:event.target.value})
        if (event.target.name === "genre")
            setFormValues({...formValues, genre:event.target.value})
        if (event.target.name === "description")
            setFormValues({...formValues, description:event.target.value})
        if (event.target.name === "image")
            setFormValues({...formValues, image:event.target.value})
        if (event.target.name === "price")
            setFormValues({...formValues, price:event.target.value})               
    }
    let {id} = useParams();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`/products/${id}`, formValues)
            .then((res) => console.log(res))
            .catch ((err) => console.log(err.response))
    }
    return (
        <div className="CadastroProduto">
            <Form onSubmit={handleSubmit} className="formProduto">
                <Form.Group controlId="formbasicName">
                    <Form.Control name="name" onChange={inputChange} type = "text" placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formbasicAuthor">
                    <Form.Control name="author" onChange={inputChange} type = "text" placeholder="Author"/>
                </Form.Group>
                <Form.Group controlId="formbasicGenre">
                    <Form.Control name="genre" onChange={inputChange} type = "text" placeholder="Genre"/>
                </Form.Group>
                <Form.Group controlId="formbasicDescription">
                    <Form.Control name="description" onChange={inputChange} type = "text" placeholder="Description"/>
                </Form.Group>
                <Form.Group controlId="formbasicImage">
                    <Form.Control name="image" onChange={inputChange} type = "text" placeholder="Image"/>
                </Form.Group>
                <Form.Group controlId="formbasicPrice"> 
                    <Form.Control name="price" onChange={inputChange} type = "text" placeholder="0.00"/>
                </Form.Group> 
                <Button variant="warning" type="submit">Concluir Edicao</Button>
            </Form>
        </div> 
    )
}