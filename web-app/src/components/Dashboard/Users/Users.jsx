import axios from 'axios'
import {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {Button} from 'react-bootstrap';
import UserCard from '../UserCard/UserCard'; 
import './Users.css'

export default function User() {
    const [users, setUser] = useState();
    useEffect(() => 
        axios.get('/users')
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err.response)), 
        []);
    let loadedUsers = [];
    const UsersToCards = (element, index) =>
    <Link className='hoverable' key = {index}
    to={`${useRouteMatch().path}/${element.id}`}>
        <UserCard key = {index} user = {element}/>
    </Link> 
    if(users) loadedUsers = users.map(UsersToCards);
    return (
        //Falta teminar o botão com a classe dele ainda
        <div className = "User">
            <Link to ={`${useRouteMatch().path}/cadastro`}>
                <Button className = "botaoCadastro">
                    Cadastrar Usuario
                </Button>
            </Link>
            <div className = "itens">
                {loadedUsers}
            </div>
        </div>
    )
}