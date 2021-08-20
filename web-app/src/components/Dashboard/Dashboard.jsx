import axios from "axios";
import { useState, useEffect  } from "react";
import { Nav, Button } from "react-bootstrap";
import {useHistory} from 'react-router'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Dashboard.css';

import UserProfile from './UserProfile/UserProfile';
import Users from './Users/Users';
import Product from './Product/Product';
import ProductProfile from './ProductProfile/ProductProfile';
import CadastroProduto from './CadastroProduto/CadastroProduto';
import AlterarProduto from './AlterarProduto/AlterarProduto';
import AlterarUser from './AlterarUser/AlterarUser';
import CadastroUser from "./CadastroUsuario/CadastroUser";
import Sede from './Sede/Sede';
import SedeProfile from './SedeProfile/SedeProfile';
import CadastroSede from './CadastroSede/CadastroSede';
import AlterarSede from './AlterarSede/AlterarSede';
export default function Dashboard() {
    const [user, setUser] = useState(false);
    useEffect(() =>{
    axios.get('/users/me')
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err.response))
    },[]);
    
    const history = useHistory();
    const handleLogout = () =>{
        axios.get('/users/logout');
        history.push('/')

    }
    if(user)
      return (
        <div className="Dashboard">
            <Nav className="flex-column">
            <Nav.Item as ="h1">Dashboard</Nav.Item>
            <hr/>
            <img width="130" height="130" src={user.image} alt="user"/> 
            <Nav.Item>{user.name}</Nav.Item>
            <Nav.Item>{user.email}</Nav.Item>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            <hr/>
            <Nav.Link href="/dashboard/users">Usuarios</Nav.Link>
            <Nav.Link href="/dashboard/products">Produtos</Nav.Link>
            <Nav.Link href="/dashboard/sedes">Sedes</Nav.Link>
            <Nav.Link href="/Home">Home</Nav.Link>
            </Nav>
            <Router>
                <Switch>
                <Route path="/dashboard/sedes/cadastro">
                        <CadastroSede/>
                    </Route> 
                    <Route path="/dashboard/sedes/edit/:Id">
                        <AlterarSede/>
                    </Route>
                    
                    <Route path="/dashboard/users/cadastro">
                        <CadastroUser/>
                    </Route> 
                    <Route path="/dashboard/users/edit/:Id">
                        <AlterarUser/>
                    </Route>
                    <Route path="/dashboard/users/:Id">
                        <UserProfile user={user}/>
                    </Route>
                    <Route path="/dashboard/users">
                        <Users/>
                    </Route>
                    <Route path="/dashboard/products/cadastro">
                        <CadastroProduto/>
                    </Route>

                    <Route path="/dashboard/products/edit/:id">
                        <AlterarProduto user={user}/>
                    </Route>

                    <Route path="/dashboard/products/:id">
                        <ProductProfile user={user}/>
                    </Route>
                    <Route path="/dashboard/products">
                        <Product/>
                    </Route>

                    <Route path="/Home">

                    </Route>

                    <Route path="dashboard/sedes">
                        <Sede/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
    else
      return(
          <h1>Loading</h1>
      )
        
}
