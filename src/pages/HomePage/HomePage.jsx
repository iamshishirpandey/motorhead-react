import React from "react";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import { getProducts } from "../../actions/getProducts";
import { useEffect, useState } from "react";

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
  {
    id: "2",
    name: "SPORTS ROAD TYRE",
    price: 365000,
    bgImg: "/img/slider/slider-img5.jpg",
  },
];

const HomePage = ({ products }) => {
  useEffect(() => {
    console.log(products);
  }, []);
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
                <div className="container">
                  <div className="row" style={{ display: "flex", paddingTop: 120, alignItem: "center", height: "80vh" }}>
                    <div className="col-xl-6 col-lg-7 text-white text-left">
                      <h5 style={{ color: "white" }}>MOTORHEAD</h5>
                      <h1>SPORTS ROAD TYRE</h1>
                      <p style={{ fontSize: 20 }}>PRICE MRP- RS. 395000</p>
                      <a href={`/product-details/${item.id}`} className="site-btn sb-line">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>OUR PRODUCTS</h2>
          </div>
          <OwlCarousel items={4} className="owl-theme" loop nav margin={8} nav={true}>
            <div>
              <div className="card justify-center" style={{ textAlign: "center" }}>
                <img className="img" src="/img/slider/slider-img6.jpg" />
                <h6>Tekken 250</h6>
                <p>PRICE MRP- RS. 375000</p>
              </div>
            </div>
            <div>
              <img className="img" src="/img/slider/slider-img6.jpg" />
            </div>
            <div>
              <img className="img" src="/img/slider/slider-img6.jpg" />
            </div>
            <div>
              <img className="img" src="/img/slider/slider-img6.jpg" />
            </div>
            <div>
              <img className="img" src="/img/slider/slider-img6.jpg" />
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div className="banner set-bg" style={{ backgroundImage: "/img/banner-bg.jpg" }}>
            <img src="/img/banner-logo.png" alt="" />
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
