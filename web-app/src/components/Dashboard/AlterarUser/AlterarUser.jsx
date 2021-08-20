import axios from 'axios';
import { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import './AlterarUser.css';

export default function AlterarUser(){
    const history = useHistory();
    const {Id} = useParams();

    const [user, setUser] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        image: '', 
        role: '' 
    })

    useEffect(() => {
        axios.get(`/users/user/${Id}`).them(res => setUser(res.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (user) setFormValues({name: user.name, email: user.email, image: user.image, role:user.role})
    }, [user]);
    const inputChange = (event) =>{
        if (event.target.name === "name")
            setFormValues({...formValues, name:event.target.value})
        if (event.target.name === "email")
            setFormValues({...formValues, email:event.target.value})
        if (event.target.name === "image")
            setFormValues({...formValues, image:event.target.value})
        if (event.target.name === "role")
            setFormValues({...formValues, role:event.target.value})               
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put( `/users/user/${Id}`, formValues)
            .then((res) => history.pushState('/dasboard/users'))
            .catch ((err) => console.log(err.response))
    }
    return (
        <div className="CadastroUser">
            <Form onSubmit={handleSubmit} className="formUser">
                <Form.Group controlId="formbasicName">
                    <Form.Control name="name" defaultValue={user.name} onChange={inputChange} type = "text" placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formbasicAuthor">
                    <Form.Control name="email" defaultValue={user.email} onChange={inputChange} type = "text" placeholder="Author"/>
                </Form.Group>
                <Form.Group controlId="formbasicImage">
                    <Form.Control name="image" defaultValue={user.image} onChange={inputChange} type = "text" placeholder="Image"/>
                </Form.Group>
                <Form.Group controlId="formbasicPrice"> 
                    <Form.Control name="role" defaultValue={user.role} onChange={inputChange} type = "role" placeholder="0.00"/>
                </Form.Group> 
                <Button variant="sucess" type="submit">Alterar Dados </Button>
            </Form>
        </div> 
    )
}


