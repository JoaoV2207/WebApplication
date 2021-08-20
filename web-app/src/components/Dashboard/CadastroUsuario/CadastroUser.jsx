import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './CadastroUser.css';

export default function CadastroUser(){
    const history = useHistory();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
    })
    const inputChange = (event) =>{
        if (event.target.name === "name")
            setFormValues({...formValues, name:event.target.value})
        if (event.target.name === "email")
            setFormValues({...formValues, email:event.target.value})
        if (event.target.name === "image")
            setFormValues({...formValues, image:event.target.value})
        if (event.target.name === "password")
            setFormValues({...formValues, password:event.target.value})               
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/users', formValues)
            .then((res) => history.pushState('/dasboard/users'))
            .catch ((err) => console.log(err.response))
    }
    return (
        <div className="CadastroUser">
            <Form onSubmit={handleSubmit} className="formUser">
                <Form.Group controlId="formbasicName">
                    <Form.Control name="name" onChange={inputChange} type = "text" placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formbasicAuthor">
                    <Form.Control name="email" onChange={inputChange} type = "text" placeholder="Author"/>
                </Form.Group>
                <Form.Group controlId="formbasicImage">
                    <Form.Control name="image" onChange={inputChange} type = "text" placeholder="Image"/>
                </Form.Group>
                <Form.Group controlId="formbasicPrice"> 
                    <Form.Control name="password" onChange={inputChange} type = "password" placeholder="0.00"/>
                </Form.Group> 
                <Button variant="sucess" type="submit">Concluir Cadastro </Button>
            </Form>
        </div> 
    )
}


