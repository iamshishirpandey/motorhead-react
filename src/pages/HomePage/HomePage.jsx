import React from "react";
import { Carousel } from "react-responsive-carousel";
import OwlCarousel from "react-owl-carousel";
import { getProducts } from "../../actions/getProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <Carousel
            autoPlay
            showStatus={false}
            showArrows={true}
            onChange={handleChange}
            onClickItem={handleClickItem}
            onClickThumb={handleClickThumb}
          >
            {products &&
              products.map((product) => {
                console.log(product.fields.images);
                return (
                  <div
                    key={product.sys.id}
                    className="hs-item set-bg"
                    style={{
                      backgroundImage: `url(${product.fields.images[0].fields.file.url})`,
                      height: "80vh",
                    }}
                    // data-setbg="/img/slider/slider-img6.jpg"
                  >
                    <div className="container">
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          paddingTop: 120,
                          alignItem: "center",
                          height: "80vh",
                        }}
                      >
                        <div className="col-xl-6 col-lg-7 text-white text-left">
                          <h5 style={{ color: "white" }}>MOTORHEAD</h5>
                          <h1>{product.fields.title}</h1>
                          <p style={{ fontSize: 20 }}>
                            PRICE MRP- {product.fields.price}
                          </p>
                          <a
                            href={`/product-details/${product.sys.id}`}
                            className="site-btn sb-line"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </section>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>OUR PRODUCTS</h2>
          </div>
          <OwlCarousel
            items={4}
            className="owl-theme"
            loop
            nav
            margin={8}
            nav={true}
          >
            {products &&
              products.map((product) => {
                console.log(product.fields.images);
                return (
                  <div>
                    <div
                      className="card justify-center"
                      style={{ textAlign: "center" }}
                    >
                      <img
                        className="img"
                        src={product.fields.images[0].fields.file.url}
                        style={{ marginBottom: 10, height: 200 }}
                      />
                      <h6>{product.fields.title}</h6>
                      <p>PRICE MRP- {product.fields.price}</p>
                      <Link
                        to={`/product-details/${product.sys.id}`}
                        className="site-btn sb-line"
                      />
                    </div>
                  </div>
                );
              })}
          </OwlCarousel>
        </div>
      </section>

      <section className="banner-section">
        <div className="container">
          <div
            className="banner set-bg"
            style={{ backgroundImage: "/img/banner-bg.jpg" }}
          >
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
    </>
  );
};

export default HomePage;
