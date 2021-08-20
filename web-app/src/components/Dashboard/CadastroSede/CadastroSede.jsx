import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

import './CadastroSede.css';

export default function CadastroSede(){
    const [formValues, setFormValues] = useState({
        name: '',
        adress: '',
        image: '',
  
    })
    const inputChange = (event) =>{
        if (event.target.name === "name")
            setFormValues({...formValues, name:event.target.value})
        if (event.target.name === "adress")
            setFormValues({...formValues, author:event.target.value})
        if (event.target.name === "image")
            setFormValues({...formValues, image:event.target.value})     
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/sedes', formValues)
            .then((res) => console.log(res))
            .catch ((err) => console.log(err.response))
    }
    return (
        <div className="CadastroProduto">
            <Form onSubmit={handleSubmit} className="formProduto">
                <Form.Group controlId="formbasicName">
                    <Form.Control name="name" onChange={inputChange} type = "text" placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formbasicAdress">
                    <Form.Control name="adress" onChange={inputChange} type = "text" placeholder="Endereço"/>
                </Form.Group>
                <Form.Group controlId="formbasicImage">
                    <Form.Control name="image" onChange={inputChange} type = "text" placeholder="Image"/>
                </Form.Group>
                <Button variant="sucess" type="submit">Concluir Cadastro </Button>
            </Form>
        </div> 
    )
}


