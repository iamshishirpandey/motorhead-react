import React from "react";
import { Carousel } from "react-responsive-carousel";

const carouselItems = [
  {
    id: "1",
    name: "TEKKEN250",
    price: 395000,
    bgImg: "/img/slider/slider-img6.jpg",
  },
  {
    id: "2",
    name: "SCRAMBLER250",
    price: 455000,
    bgImg: "/img/slider/slider-img7.jpg",
  },
];

const HomePage = () => {
  const handleChange = () => {};

  const handleClickItem = () => {};

  const handleClickThumb = () => {};
  return (
    <>
      <section className="hero-section">
        <div
        // className="hero-slider owl-carousel"
        >
          <Carousel autoPlay showStatus={false} showArrows={true} onChange={handleChange} onClickItem={handleClickItem} onClickThumb={handleClickThumb}>
            {/* <div className="hs-item set-bg" data-setbg="/img/slider/slider-img6.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span style={{ color: "black" }}>MOTORHEAD</span>
                    <h2>TEKKEN250</h2>
                    <p>PRICE MRP- RS. 395000</p>
                    <a href="tekken250.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {carouselItems.map((item) => (
              <div
                key={item.id}
                className="hs-item set-bg"
                style={{ backgroundImage: `url(${item.bgImg})`, height: "80vh" }}
                // data-setbg="/img/slider/slider-img6.jpg"
              >
                <div className="">
                  <div className="row" style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "80vh" }}>
                    <div className="col-xl-6 col-lg-7 text-white">
                      <span style={{ color: "black" }}>MOTORHEAD</span>
                      <h2>TEKKEN250</h2>
                      <p>PRICE MRP- RS. 395000</p>
                      <a href={`/product-details/${item.id}`} className="site-btn sb-line">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="hs-item set-bg" data-setbg="/img/slider/slider-img7.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>SCRAMBLER250</h2>
                    <p>PRICE MRP- RS. 455000</p>
                    <a href="scrambler250.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-item set-bg" data-setbg="/img/slider/slider-img5.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>SPORTS OFF ROAD TYRE</h2>
                    <p>PRICE MRP- RS. 368000</p>
                    <a href="sports-off-road-tyre.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-item set-bg" data-setbg="img/slider/slider-img1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>SPORTS ROAD TYRE</h2>
                    <p>PRICE MRP- RS. 365000</p>
                    <a href="sports-road-tyre.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-item set-bg" data-setbg="img/slider/slider-img2.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>X TORQUE</h2>
                    <p>PRICE MRP- RS. 380000</p>
                    <a href="x-torque.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-item set-bg" data-setbg="img/slider/slider-img3.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>MH200X</h2>
                    <p>PRICE MRP- RS. 375000</p>
                    <a href="mh200x.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-item set-bg" data-setbg="img/slider/slider-img4.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>MOTORHEAD</span>
                    <h2>MH150R</h2>
                    <p>PRICE MRP- Rs. 288000</p>
                    <a href="mh150r.htm" className="site-btn sb-line">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </Carousel>
        </div>
      </section>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>OUR PRODUCTS</h2>s
          </div>
          <div className="product-slider owl-carousel">
            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/5.jpg" alt="" />
                <div className="pi-links">
                  <a href="tekken250.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>TEKKEN250</h6>
                <p align="center">PRICE MRP- RS. 395000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/7.jpg" alt="" />
                <div className="pi-links">
                  <a href="scrambler250.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>SCRAMBLER250</h6>
                <p align="center">PRICE MRP- RS. 455000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/6.jpg" alt="" />
                <div className="pi-links">
                  <a href="sports-off-road-tyre.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>SPORTS OFF ROAD TYRE</h6>
                <p align="center">PRICE MRP- RS. 368000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/1.jpg" alt="" />
                <div className="pi-links">
                  <a href="sports-road-tyre.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>SPORTS ROAD TYRE</h6>
                <p align="center">PRICE MRP- RS. 365000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/2.jpg" alt="" />
                <div className="pi-links">
                  <a href="x-torque.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>X TORQUE-250</h6>
                <p align="center">PRICE MRP- RS. 380000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/3.jpg" alt="" />
                <div className="pi-links">
                  <a href="mh200x.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>MH200X</h6>
                <p align="center">PRICE MRP- RS. 375000</p>
              </div>
            </div>

            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/home-products/4.jpg" alt="" />
                <div className="pi-links">
                  <a href="mh150r.htm" className="add-card">
                    <i className="flaticon-right-arrow"></i>
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>MH150R</h6>
                <p align="center">PRICE MRP- RS. 288000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div className="banner set-bg" data-setbg="img/banner-bg.jpg">
            <div className="tag-new">NEW</div>
            <span>Pokhara Showroom Opening Ceremony</span>
            <h3>MOTORHEAD Motorcycle</h3>
            <a href="news-events" className="site-btn">
              READ MORE{" "}
            </a>
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

export default HomePage;
