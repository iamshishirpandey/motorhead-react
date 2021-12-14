import React from "react";
import { Link } from "react-router-dom";

const Header = ({ products }) => {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center text-lg-left">
              <Link to="/" className="site-logo">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>

            <div className="col-xl-4 col-lg-8"></div>

            <div className="col-xl-5 col-lg-5">
              <div className="user-panel">
                <div style={{ marginTop: 20 }}></div>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/motorheadnepal"
                    className="facebook"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                    <span>facebook</span>
                  </a>
                  <Link to="/" className="youtube">
                    <i className="fa fa-youtube"></i>
                    <span>youtube</span>
                  </Link>
                  <Link to="/" className="bookaride">
                    <span style={{ color: "#cc3333" }}>Book a ride</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-navbar">
        <div className="container">
          <ul className="main-menu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/aboutus/introduction">AboutUs</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/aboutus/introduction">Introduction</Link>
                </li>
                <li>
                  <Link to="/aboutus/board-of-directors">
                    Board of Directors
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/">Our Products</Link>
              <ul className="sub-menu">
                {products.map((item, index) => {
                  return (
                    <li>
                      <Link to={`/product-details/${item.sys.id}`}>
                        <a>{item.fields.title}</a>
                      </Link>
                    </li>
                  );
                })}

                {/* <li>
                <Link to="our-products">
                  <a>Scrambler250</a>
                </Link>
              </li>
              <li>
                <Link to="our-products">
                  <a>Sports Off Road Tyre</a>
                </Link>
              </li>
              <li>
                <Link to="our-products">
                  <a>Sports Road Tyre</a>
                </Link>
              </li>
              <li>
                <Link to="our-products">
                  <a>X Torque</a>
                </Link>
              </li>
              <li>
                <Link to="our-products">
                  <a>MH200X</a>
                </Link>
              </li>
              <li>
                <Link to="our-products">
                  <a>MH150R</a>
                </Link>
              </li> */}
              </ul>
            </li>

            <li>
              <Link to="/dealer-network">Dealer Network</Link>
            </li>

            <li>
              <Link to="/customer-reviews">Customer Reviews</Link>
            </li>

            <li>
              <Link to="/news-events">News & Events</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
