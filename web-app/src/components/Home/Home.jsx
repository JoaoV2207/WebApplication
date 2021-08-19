import { Link } from 'react-router-dom';
import "./Home.css"



export default function Home(){
    return(

            <div>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="keywords" content />
              <meta name="description" content />
              <meta name="author" content />
              <title>O Mundo de Sofia</title>
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
              <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
              <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap" rel="stylesheet" />
              <link href="css/style.css" rel="stylesheet" />
              <link href="css/responsive.css" rel="stylesheet" />
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
                              <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/Sedes"> Sedes </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/Books"> Livros </a>
                            </li>
                            <li className="nav-item">
                          <a className="nav-link" href="/Novidades"> Novidades </a>
                        </li>
                            <li className="nav-item">
                              <a className="nav-link" href="login.html">Adicionar</a>
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
              {/*---- end header section ------ */}
              <div className="row justify-content-sm-center">
                <div className="col-12 head">
                  <div className="card">
                    <div className="imgBox">
                      <div className="bark" />
                      <img src="images/Untitled design (1).png" />
                    </div>
                    <div className="details">
                      <h4 className="color1">Nossa missão</h4>
                      <p>Tornar a leitura mais acessível e fomentar o pensamento crítico e analítico na sociedade</p>
                      <h4 className="color1">Nossa visão</h4>
                      <p>Ser referência de Livraria para todo o Brasil e propagar a leitura em aspecto nacional</p>
                      <h4 className="color1">Nossos valores</h4>
                      <p>Ser Pensante, acessibilidade, diversidade, ler e aprender</p>      </div>
                  </div> 
                </div>
              </div>
              {/* about section */}
              <div className="bg">
                <section className="about_section layout_padding">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5 offset-md-4">
                        <div className="about_detail-box">
                          <h3 className="custom_heading ">
                            Sobre
                          </h3>
                          <p className="about_text">
                            Rede de bibliotecas e livrarias que aluga e vende livros de modo a tornar a leitura mais acessível. Diversas pontos por MG e região, durante a pandemia adaptaram ao modelo de vender e alugar pelo instagram, mas no momento buscam profissionalizar seu negócio com sites e sistemas. 
                          </p>
                          <div>
                            <a href>
                              Saiba mais
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section></div>
              {/* end about section */}
              {/* last added books*/}
              <section className="brand_section layout_padding2">
                <div className="container">
                  <div className="brand_heading">
                    <h3 className="custom_heading">
                      Últimos livros adicionados
                    </h3>
                  </div>
                </div>
                <div className="container-fluid brand_item-container">
                  <div className="brand_item-box">
                    <div className="brand_img-box  item-1">
                      <a href="item1">
                        Veja mais
                      </a>
                    </div>
                    <div className="brand_detail-box">
                      <h6 className>
                        Ladrão de Raios
                      </h6>
                    </div>
                  </div>
                  <div className="brand_item-box">
                    <div className="brand_img-box  item-2">
                      <a href>
                        Veja mais
                      </a>
                    </div>
                    <div className="brand_detail-box">
                      <h6 className>
                        Harry Potter e o Prizioneiro de Azkaban
                      </h6>
                    </div>
                  </div>
                  <div className="brand_item-box">
                    <div className="brand_img-box  item-3">
                      <a href>
                        Veja mais
                      </a>
                    </div>
                    <div className="brand_detail-box">
                      <h6 className>
                        Pequeno Príncipe
                      </h6>
                    </div>
                  </div>
                  <div className="brand_item-box">
                    <div className="brand_img-box  item-4">
                      <a href>
                        Veja mais
                      </a>
                    </div>
                    <div className="brand_detail-box">
                      <h6 className>
                        Crônicas de Gelo e Fogo
                      </h6>
                    </div>
                  </div>
                  <div className="brand_item-box">
                    <div className="brand_img-box  item-5">
                      <a href>
                        Veja mais
                      </a>
                    </div>
                    <div className="brand_detail-box">
                      <h6 className>
                        Pequeno Manual Antirracista
                      </h6>
                    </div>
                  </div>
                </div>
              </section>
              {/* end last added books */}
              {/* why section */}
              <section className="why_section layout_padding">
                <div className="container">
                  <h3 className="custom_heading">
                    Nossas sedes
                  </h3>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img_box">
                        <img src="images/feature-4.jpeg" alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>
                          Funcionários
                        </h5>
                        <p>
                          variations of passages of Lorem Ipsum available, but the majority have suffered
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img_box">
                        <img src="images/feature-4.jpeg" alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>
                          Lourdes
                        </h5>
                        <p>
                          variations of passages of Lorem Ipsum available, but the majority have suffered
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img_box">
                        <img src="images/feature-4.jpeg" alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>
                          Pampulha
                        </h5>
                        <p>
                          variations of passages of Lorem Ipsum available, but the majority have suffered
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img_box">
                        <img src="images/feature-4.jpeg" alt="" />
                      </div>
                      <div className="detail_box">
                        <h5>
                          Venda Nova
                        </h5>
                        <p>
                          variations of passages of Lorem Ipsum available, but the majority have suffered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end why section */}
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
                  © 2021 All Rights Reserved By Mundo de Sofia
                </p>
              </section>
              {/* footer section */}
            </div>
          );
        }
      
          
    
    
