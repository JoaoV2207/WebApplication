import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useParams} from 'react-router';

import './AlterarSede.css';

export default function AlterarSedes(){
    const [formValues, setFormValues] = useState({
        name: '',
        adress: '',
        image: ''

    })
    const inputChange = (event) =>{
        if (event.target.name === "name")
            setFormValues({...formValues, name:event.target.value})
        if (event.target.name === "adress")
            setFormValues({...formValues, adress:event.target.value})
        if (event.target.name === "image")
            setFormValues({...formValues, image:event.target.value})           
    }
    let {id} = useParams();
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`/sedes/${id}`, formValues)
            .then((res) => console.log(res))
            .catch ((err) => console.log(err.response))
    }
    return (
        <div className="CadastroSede">
            <Form onSubmit={handleSubmit} className="formSede">
                <Form.Group controlId="formbasicName">
                    <Form.Control name="name" onChange={inputChange} type = "text" placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formbasicAuthor">
                    <Form.Control name="adress" onChange={inputChange} type = "text" placeholder="Author"/>
                </Form.Group>
                <Form.Group controlId="formbasicImage">
                    <Form.Control name="image" onChange={inputChange} type = "text" placeholder="Image"/>
                </Form.Group>
                <Button variant="warning" type="submit">Concluir Edicao</Button>
            </Form>
        </div> 
    )
}