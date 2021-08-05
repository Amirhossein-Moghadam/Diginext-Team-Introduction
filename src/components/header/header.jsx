import "./header.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import intro from "../../img/AI.png";

const Header = () => {
  return (
    <header id="home" className="hero-area">
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div class="container">
          <a href="index.html" className="navbar-brand">
            Semicolon
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#about-us">
                  About US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">
                Work Hard In Silence, Let Success Make The Noise
              </h2>
              <p>
                <b>Diginext </b>AI Zero 2 Hero Camp - 2021
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src={intro} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
