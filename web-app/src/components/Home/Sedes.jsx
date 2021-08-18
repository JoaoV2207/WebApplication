import "./Sedes.css"
import React from "react";

export default function Sedes(){

    return (
      <div>
        {/* Basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Mobile Metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Site Metas */}
        <meta name="keywords" content />
        <meta name="description" content />
        <meta name="author" content />
        <title>Sedes</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/sedes.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        <div className="hero_area">
          <div className="hero_area">
            {/*------ header ------*/}
            <header className="header_section">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                  <a className="navbar-brand" href="index.html">
                    <span>
                      <img src="images/O-Mundo-de-Sofia-Logo-removebg-preview.png" alt="" />
                    </span>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                      <ul className="navbar-nav  ">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="sedes.html"> Sedes </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="books.html"> Livros </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="novidades.html"> Novidades </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="login.html">Login</a>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </div>
        <h1 className="text-center titulo">Nosas sedes</h1>
        {/*------ Sedes------*/}
        <div className="wrapper">
          <div className="cols">
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <a href="sede.html">
                <div className="container">
                  <div className="front" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80)'}}>
                    <div className="inner">
                      <p>Pampulha</p>
                      <span>Av Novara</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>O melhor local para encontrar um livro</p>
                    </div>
                  </div>
                </div>
              </a></div><a href="sede.html">
            </a>  
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <a href="sede.html">
                <div className="container">
                  <div className="front" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80)'}}>
                    <div className="inner">
                      <p>Venda Nova</p>
                      <span>Shopping estação</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>Casa dos livros de Infanto Juvenil</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>  
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <a href="sede.html">
                <div className="container">
                  <div className="front" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80)'}}>
                    <div className="inner">
                      <p>Nova suiça</p>
                      <span>Cefet</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>Encontre seus livros didáticos</p>
                    </div>
                  </div>
                </div>
              </a> 
            </div> 
            <div className="col" ontouchstart="this.classList.toggle('hover');">
              <a href="sede.html">
                <div className="container">
                  <div className="front" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80)'}}>
                    <div className="inner">
                      <p>Funcionários</p>
                      <span>Praça da Liberdade 250</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>Você encontra os melhores livros de cultura aqui</p>
                    </div>
                  </div>
                </div>
              </a></div><a href="sede.html">
            </a></div><a href="sede.html">
          </a>
        </div>
        {/* map section */}
        <div id="map" />
        {/* end of map section */}
        {/* info section */}
        <section className="info_section layout_padding">
          <div className="container">
            <div className="info_items">
              <a href>
                <div className="item ">
                  <div className="img-box box-1">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      Lorem Ipsum is simply dummy text
                    </p>
                  </div>
                </div>
              </a>
              <a href>
                <div className="item ">
                  <div className="img-box box-2">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      +02 1234567890
                    </p>
                  </div>
                </div>
              </a>
              <a href>
                <div className="item ">
                  <div className="img-box box-3">
                    <img src alt="" />
                  </div>
                  <div className="detail-box">
                    <p>
                      demo@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
          <p>
            © 2020 All Rights Reserved By O mundo de Sofia
          </p>
        </section>
        {/* footer section */}
        {/* partial */}
      </div>
    );
  }
