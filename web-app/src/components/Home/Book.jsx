import "./Book.css"

export default function Book(){
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
        <link href="css/book.css" rel="stylesheet" />
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
        {/* Book 1 */} 
        <section className="book_section layout_padding">
          <div className="row">
            <div className="Book col align-items-center">
              <ul id="bk-list" className="bk-list clearfix">
                <li>
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
                  </div>
                </li>
                <li>
                </li></ul>
              {/* about the book */}    
              <div className="info_bk col">
                <h3>
                  <span>Rick Riordan</span>
                  <span>Percy Jackson e o Ladrão de Raios</span>
                </h3>
                <p>Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times. O autor conjuga lendas da mitologia grega com aventuras no século XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga.</p>
              </div>
            </div>
          </div>
        </section>
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
            © 2020 All Rights Reserved By
            <a href="https://html.design/">Books</a>
          </p>
        </section>
        {/* footer section */}
        {/* partial */}
      </div>
    );
  }