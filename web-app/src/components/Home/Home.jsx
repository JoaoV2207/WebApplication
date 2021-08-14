import { Link } from 'react-router-dom';
import "./Home.css"
import cover from '../Home/assets/images/back-cover.jpg';
import coverVariant from '../Home/assets/images/back-cover-variacao.jpg';


export default function Home(){
    return(
        <div classNome="Home">
            <div className="Header">
                <div classNome="flex-title">
                    <img src={cover}
                    alt="cover"
                    widht="120px"
                    height="160px"
                    padding="0"
                    />
                </div>
                <div className="flex-button">
                <Link to="/login">
                    <button className="login-button">
                        Login
                    </button>
                </Link>
                </div>
        </div>           
        <div className="Conteudo">
            <figure>
                <img id="LogoV"
                alt="coverVariant"
                src={coverVariant}
                widht="300px"
                height="150px"
                />
                    <figcaption>O maior site de biblioteca do mundo</figcaption>
            </figure>
        </div>
    </div>
    )
}