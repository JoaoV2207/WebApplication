import "./Sede.css"
import React from "react";
export default function Sede(){
      return (
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
                          <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="sedes.html"> Sedes </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="books.html"> Livros </a>
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
          {/*---- end header section ------ */}
          <div className="row justify-content-sm-center">
            <div className="col-12 head">
              <div className="card">
                <div className="imgBox">
                  <div className="bark" />
                  <img src="images/Untitled design (1).png" />
                </div>
                <div className="details">
                  <h4 className="color1">Nossa miss??o</h4>
                  <p>Tornar a leitura mais acess??vel e fomentar o pensamento cr??tico e anal??tico na sociedade</p>
                  <h4 className="color1">Nossa vis??o</h4>
                  <p>Ser refer??ncia de Livraria para todo o Brasil e propagar a leitura em aspecto nacional</p>
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
                        Rede de bibliotecas e livrarias que aluga e vende livros de modo a tornar a leitura mais acess??vel. Diversas pontos por MG e regi??o, durante a pandemia adaptaram ao modelo de vender e alugar pelo instagram, mas no momento buscam profissionalizar seu neg??cio com sites e sistemas. 
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
                  ??ltimos livros adicionados
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
                    Ladr??o de Raios
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
                    Pequeno Pr??ncipe
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
                    Cr??nicas de Gelo e Fogo
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
                      Funcion??rios
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
          {/* Basic */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* Mobile Metas */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Site Metas */}
          <meta name="keywords" content />
          <meta name="description" content />
          <meta name="author" content />
          <title>Sede</title>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap" rel="stylesheet" />
          <link href="css/sede.css" rel="stylesheet" />
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
          {/* sede */}
          <div className="product group">
            <div className="col-1-2 product-image">
              <div className="bg" />
            </div>
            <div className="col-1-2 product-info">
              <h1>Sede Pampulha</h1>
              <h2>Avenida Novara 97</h2>
              <br />
              <p>Sede que possui livros variados</p>
              <ul>
                <li>Mais de 10 colaboradores</li>
                <li>890 livros dispon??veis</li>
                <li>Milhares de clientes felizes</li>
              </ul>
            </div>
          </div>
          {/* end of sede */}
          {/* books */}
          <div className="main">
            <ul id="bk-list" className="bk-list clearfix">
              <li>
                {/* Book 1 */}
                <div className="bk-book book-1 bk-bookdefault">
                  <div className="bk-front">
                    <div className="bk-cover">
                      <h2>
                      </h2>
                    </div>
                    <div className="bk-cover-back" />
                  </div>
                  <div className="bk-page">
                    <div className="bk-content bk-content-current">
                      <p>Olhe, eu n??o queria ser um meio-sangue.
                        Se voc?? est?? lendo isto porque acha que pode ser um, meu conselho ?? o seguinte: feche este
                        livro agora mesmo. Acredite em qualquer mentira que sua m??e ou seu pai lhe contou sobre seu
                        nascimento, e tente levar uma vida normal.Ser meio-sangue ?? perigoso. ?? assustador. Na maioria das vezes, acaba com a gente de um jeito
                        penoso e detest??vel.</p>
                    </div>
                    <div className="bk-content">
                      <p>Se voc?? ?? uma crian??a normal, que est?? lendo isto porque acha que ?? fic????o, ??timo. Continue
                        lendo. Eu o invejo por ser capaz de acreditar que nada disso aconteceu.
                        Mas, se voc?? se reconhecer nestas p??ginas ??? se sentir alguma coisa emocionante l?? dentro -,
                        pare de ler imediatamente. Voc?? pode ser um de n??s. E, uma vez que fica sabendo disso, ?? apenas
                        uma quest??o de tempo antes que eles tamb??m sintam isso, e</p>
                    </div>
                    <div className="bk-content">
                      <p>venham atr??s de voc??.
                        N??o diga que eu n??o avisei.
                        Meu nome ?? Percy Jackson.
                        Tenho doze anos de idade. At?? alguns meses atr??s, era aluno de um internato, na Academia
                        Yancy, uma escola particular para crian??as problem??ticas no norte do estado de Nova York.
                        Se eu sou uma crian??a problem??tica?.
                        Sim. Pode-se dizer isso.</p>
                    </div>
                  </div>
                  <div className="bk-back">
                    <p>O autor conjuga lendas da mitologia grega com aventuras no s??culo XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os her??is da Gr??cia antiga. </p>
                  </div>
                  <div className="bk-right" />
                  <div className="bk-left">
                    <h2>
                      <span>Rick Riordan</span>
                      <span>Percy Jackson e o Ladr??o de Raios</span>
                    </h2>
                  </div>
                  <div className="bk-top" />
                  <div className="bk-bottom" />
                </div>
                <div className="bk-info">
                  <button className="bk-bookback">Virar</button>
                  <button className="bk-bookview">Ler</button>
                  <a href="book.html">
                    <button>Ver mais</button>
                  </a>
                  <h3>
                    <span>Rick Riordan</span>
                    <span>Percy Jackson e o Ladr??o de Raios</span>
                  </h3>
                </div>
              </li>
              <li>
                {/* end book 1 section */}
                {/* book 4 section */}
                <div className="bk-book book-2 bk-bookdefault">
                  <div className="bk-front">
                    <div className="bk-cover">
                      <h2>
                      </h2>
                    </div>
                    <div className="bk-cover-back" />
                  </div>
                  <div className="bk-page">
                    <div className="bk-content bk-content-current">
                      <p>Harry Potter era um menino bastante fora do comum em muitas coisas. Para
                        come??ar, ele detestava as f??rias de ver??o mais do que qualquer outra ??poca do ano.
                        Depois, ele realmente queria fazer seus deveres de casa mas era obrigado a faz??-los
                        escondido, na calada da noite. E, al??m de tudo, tamb??m era bruxo.
                        Era quase meia-noite e Harry estava deitado de bru??os na cama, as cobertas
                        puxadas por cima da cabe??a como uma</p>
                    </div>
                    <div className="bk-content">
                      <p> barraca, uma lanterna em uma das m??os e
                        um grande livro encadernado em couro (Hist??ria da magia de Batilda Bagshot),
                        aberto e apoiado no travesseiro. Harry correu a ponta da caneta de pena de ??guia
                        pela p??gina, franzindo a testa, ?? procura de alguma coisa que o ajudasse a escrever
                        sua reda????o, ???A queima de bruxas no s??culo XIV foi totalmente despropositada ???
                        discuta???. A caneta pousou no alto de um par??grafo que pareceu a </p>
                    </div>
                    <div className="bk-content">
                      <p>Harry promissor. Ele empurrou os ??culos redondos para a ponte do nariz, aproximou a lanterna do livro e
                        leu:A caneta pousou no alto de um par??grafo que pareceu a Harry promissor. Ele
                        empurrou os ??culos redondos para a ponte do nariz, aproximou a lanterna do livro e
                        leu: Os que n??o s??o bruxos (mais comumente conhecidos pelo nome de trouxas) tinham
                        muito medo da magia na ??poca medieval, mas n??o tinham muita capacidade para
                        reconhec??-la</p>
                    </div>
                  </div>
                  <div className="bk-back">
                    <p>As aulas est??o de volta ?? Hogwarts e Harry Potter n??o v?? a hora de embarcar no 
                      expresso a vapor que o levar?? de volta ?? escola de bruxaria.</p>
                  </div>
                  <div className="bk-right" />
                  <div className="bk-left">
                    <h2>
                      <span>JK Rowling</span>
                      <span>Harry Potter e o Prisioneiro de Askaban</span>
                    </h2>
                  </div>
                  <div className="bk-top" />
                  <div className="bk-bottom" />
                </div>
                <div className="bk-info">
                  <button className="bk-bookback">Virar</button>
                  <button className="bk-bookview">Ler</button>
                  <a href="book.html">
                    <button>Ver mais</button>
                  </a>
                  <h3>
                    <span>JK Rowling</span>
                    <span>Harry Potter e o Prisioneiro de Askaban</span>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
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
              ?? 2020 All Rights Reserved By O mundo de Sofia
              <a href="https://html.design/">O mundo de Sofia</a>
            </p>
          </section>
          {/* footer section */}
          {/* partial */}
        </div>
      );
    }
