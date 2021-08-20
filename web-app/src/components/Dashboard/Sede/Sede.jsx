import axios from 'axios'
import {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {Button} from 'react-bootstrap';
import SedeCard from '../SedeCard/SedeCard'; 
import './Sede.css';

export default function Sede() {
    const [sede, setSede] = useState();
    useEffect(() => 
        axios.get('/sedes')
        .then((res) => setSede(res.data))
        .catch((err) => console.log(err.response)), 
        []);
    let loadedSedes = [];
    const SedesToCards = (element, index) =>
    <Link className='hoverable' key = {index}
    to={`${useRouteMatch().path}/${element.id}`}>
        <SedeCard key = {index} user = {element}/>
    </Link> 
    if(sede) loadedSedes = sede.map(SedesToCards);
    return (
        //Falta teminar o botão com a classe dele ainda
        <div className = "Sede">
            <Link to ={`${useRouteMatch().path}/cadastro`}>
                <Button className = "botaoCadastro">
                    Cadastrar Sede
                </Button>
            </Link>
            <div className = "itens">
                {loadedSedes}
            </div>
        </div>
    )
}