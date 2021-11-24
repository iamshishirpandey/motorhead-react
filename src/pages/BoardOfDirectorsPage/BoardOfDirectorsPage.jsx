import React from "react";

const BoardOfDirectorsPage = () => {
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Board of Directors</h4>
          <div className="site-pagination">
            <a href="/">Home</a> / About Us
          </div>
        </div>
      </div>

      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="/img/about-us/no-photo-available.jpg" alt="" />
                </div>
                <div className="pi-text">
                  <h6>Lok Harsha Shakya</h6>
                  <p align="center">Chairman</p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="/img/about-us/shiva-prasad-ghimire.jpg" alt="" />
                </div>
                <div className="pi-text">
                  <h6>Shiva Prasad Ghimire</h6>
                  <p align="center">Vice–Chairman</p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="/img/about-us/sugam-ghimire.jpg" alt="" />
                </div>
                <div className="pi-text">
                  <h6>Sugam Ghimire</h6>
                  <p align="center">Executive Director</p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="/img/about-us/sudip-ghimire.jpg" alt="" />
                </div>
                <div className="pi-text">
                  <h6>Sudip Ghimire</h6>
                  <p align="center">Director</p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src="/img/about-us/no-photo-available.jpg" alt="" />
                </div>
                <div className="pi-text">
                  <h6>Shresha Shakya</h6>
                  <p align="center">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          <div className="footer-logo text-center">
            <a href="/">
              <img src="/img/logo-light.png" alt="" />
            </a>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>About Us</h2>
                <p>
                  <strong>SLR Techno & Trade Pvt. Ltd.</strong> is a trading firm established in the year 2012 to capitalize the growing automobile sector in Nepal. SLR was appointed as the sole authorized distributor of Motorhead motorcycles for Nepal by Chongqing Fuego Power Co. Ltd. Motorhead Motorcycle is a Guinness world record holding company based in China. Motorhead earned its world record in 2015 for longest journey in a motorcycle, travelling over 35,000km in a single journey.{" "}
                  <span className="ft-links">
                    <a href="introduction.htm" className="readmore">
                      Read More
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Contact Us</h2>

                <h4 style={{ color: "#cc3333" }}>Motorhead Nepal</h4>
                <p>
                  Kalanga Complex, Dhobighat, Lalitpur
                  <br />
                  <strong>Phone:</strong> 01-5542934
                  <br />
                  <span className="ft-links">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@motorheadnepal.com.np" target="_blank">
                      info@motorheadnepal.com.np
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="d-none d-md-block" style={{ marginTop: 94 }}></div>
                <p>
                  Copyright &copy;2020
                  <br />
                  <span className="ft-links">
                    Designed by{" "}
                    <a href="http://www.icubegalleria.com/" target="_blank">
                      iCube Galleria
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardOfDirectorsPage;
