import React, { useEffect, useState } from "react";
import { getNewsAndEvents } from "../../actions/getNewsAndEvents";

const NewsEventsPage = () => {
  const [news, setDealers] = useState([]);

  async function mount() {
    const response = await getNewsAndEvents();
    setDealers(response);
  }

  useEffect(() => {
    mount();
  }, []);
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>News & Events</h4>
        </div>
      </div>

      <section className="gallery-section">
        <div className="container">
          <div className="row">
            {news.map((item, index) => {
              return (
                <div className="col-lg-12">
                  <h3 style={{ color: "#cc3333" }}>{item.fields.eventName}</h3>
                  <strong>{item.fields.eventSubtitle}</strong>
                  <br></br>
                  <div className="gallery-block grid-gallery">
                    <div className="container">
                      <div className="row">
                        {item.fields.images.map((images, index) => {
                          console.log("https:" + images.fields.file.url);
                          return (
                            <div className="col-md-6 col-lg-3 item">
                              <a className="lightbox" href={"https:" + images.fields.file.url} title={images.fields.file.url}>
                                <img className="img-fluid image scale-on-hover" src={"https:" + images.fields.file.url} />
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default NewsEventsPage;
