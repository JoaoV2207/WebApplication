import axios from 'axios'
import {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard'; 
import './Product.css'

export default function Product() {
    const [product, setProduct] = useState();
    useEffect(() => 
        axios.get('/products')
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err.response)), 
        []);
    let loadedProducts = [];
    const ProductsToCards = (element, index) =>
    <Link className='hoverable' key = {index}
    to={`${useRouteMatch().path}/${element.id}`}>
        <ProductCard key = {index} user = {element}/>
    </Link> 
    if(product) loadedProducts = product.map(ProductsToCards);
    return (
        //Falta teminar o botão com a classe dele ainda
        <div className = "Product">
            <Link to ={`${useRouteMatch().path}/cadastro`}>
                <Button className = "botaoCadastro">
                    Cadastrar Produto
                </Button>
            </Link>
            <div className = "itens">
                {loadedProducts}
            </div>
        </div>
    )
}