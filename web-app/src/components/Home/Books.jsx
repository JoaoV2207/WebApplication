import "./Books.css"
import React from "react";

export default function Books(){
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
        <title>Books</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/books.css" rel="stylesheet" />
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
        {/*---- end header section ------ */}
        <div className="row justify-content-sm-center">
          <div className="col-12 head">
            <div className="container"> 
              <header className="clearfix">
                <h2 className="custom_heading text-center">Catálogo por gênero</h2>
                <span className="support-note text-center">Descubra nossas últimas adições</span>
              </header>
              {/* Filter */}
              <section className="section-spacing bottom-none inverse-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="section-title text-center">
                      </div>
                    </div>
                  </div>
                  <ul id="filter-list">
                    <li className="filter active" data-filter="all">ALL</li>
                    <li className="filter" data-filter={1}>Romance</li>
                    <li className="filter" data-filter={2}>Aventura</li>
                    <li className="filter" data-filter={3}>Ficção</li>
                    <li className="filter" data-filter={4}>Policial</li>
                    <li className="filter" data-filter={5}>Fantasia</li>
                  </ul>
                </div>
              </section></div>
          </div>
          {/* end filter section */}
          <div className="main">
            <ul id="bk-list" className="bk-list clearfix">
              <li>
                {/* Book 1 */}
                <div className="bk-book book-1 bk-bookdefault">            <div className="bk-front">  
                    <div className="bk-cover">
                      <h2>
                      </h2>
                    </div>
                    <div className="bk-cover-back" />
                  </div>
                  <div className="bk-page">
                    <div className="bk-content bk-content-current">
                      <p>Olhe, eu não queria ser um meio-sangue.
                        Se você está lendo isto porque acha que pode ser um, meu conselho é o seguinte: feche este
                        livro agora mesmo. Acredite em qualquer mentira que sua mãe ou seu pai lhe contou sobre seu
                        nascimento, e tente levar uma vida normal.Ser meio-sangue é perigoso. É assustador. Na maioria das vezes, acaba com a gente de um jeito
                        penoso e detestável.</p>
                    </div>
                    <div className="bk-content">
                      <p>Se você é uma criança normal, que está lendo isto porque acha que é ficção, ótimo. Continue
                        lendo. Eu o invejo por ser capaz de acreditar que nada disso aconteceu.
                        Mas, se você se reconhecer nestas páginas – se sentir alguma coisa emocionante lá dentro -,
                        pare de ler imediatamente. Você pode ser um de nós. E, uma vez que fica sabendo disso, é apenas
                        uma questão de tempo antes que eles também sintam isso, e</p>
                    </div>
                    <div className="bk-content">
                      <p>venham atrás de você.
                        Não diga que eu não avisei.
                        Meu nome é Percy Jackson.
                        Tenho doze anos de idade. Até alguns meses atrás, era aluno de um internato, na Academia
                        Yancy, uma escola particular para crianças problemáticas no norte do estado de Nova York.
                        Se eu sou uma criança problemática?.
                        Sim. Pode-se dizer isso.</p>
                    </div>
                  </div>
                  <div className="bk-back">
                    <p>O autor conjuga lendas da mitologia grega com aventuras no século XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga. </p>
                  </div>
                  <div className="bk-right" />
                  <div className="bk-left">
                    <h2>
                      <span>Rick Riordan</span>
                      <span>Percy Jackson e o Ladrão de Raios</span>
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
                    <span>Percy Jackson e o Ladrão de Raios</span>
                  </h3>
                  <p>Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times. O autor conjuga lendas da mitologia grega com aventuras no século XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga.</p>
                </div>
              </li>
              <li>
                {/* end book 1 section */}
                {/* book 2 section */}
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
                        começar, ele detestava as férias de verão mais do que qualquer outra época do ano.
                        Depois, ele realmente queria fazer seus deveres de casa mas era obrigado a fazê-los
                        escondido, na calada da noite. E, além de tudo, também era bruxo.
                        Era quase meia-noite e Harry estava deitado de bruços na cama, as cobertas
                        puxadas por cima da cabeça como uma</p>
                    </div>
                    <div className="bk-content">
                      <p> barraca, uma lanterna em uma das mãos e
                        um grande livro encadernado em couro (História da magia de Batilda Bagshot),
                        aberto e apoiado no travesseiro. Harry correu a ponta da caneta de pena de águia
                        pela página, franzindo a testa, à procura de alguma coisa que o ajudasse a escrever
                        sua redação, “A queima de bruxas no século XIV foi totalmente despropositada –
                        discuta”. A caneta pousou no alto de um parágrafo que pareceu a </p>
                    </div>
                    <div className="bk-content">
                      <p>Harry promissor. Ele empurrou os óculos redondos para a ponte do nariz, aproximou a lanterna do livro e
                        leu:A caneta pousou no alto de um parágrafo que pareceu a Harry promissor. Ele
                        empurrou os óculos redondos para a ponte do nariz, aproximou a lanterna do livro e
                        leu: Os que não são bruxos (mais comumente conhecidos pelo nome de trouxas) tinham
                        muito medo da magia na época medieval, mas não tinham muita capacidade para
                        reconhecê-la</p>
                    </div>
                  </div>
                  <div className="bk-back">
                    <p>As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no 
                      expresso a vapor que o levará de volta à escola de bruxaria.</p>
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
                  <p>As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, 'Harry Potter e o prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.
                  </p>
                </div>
              </li>
            </ul>
          </div>
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
            © 2020 All Rights Reserved By O mundo de Sofia
          </p>
        </section>
        {/* footer section */}
        {/* partial */}
      </div>
    );
  }
