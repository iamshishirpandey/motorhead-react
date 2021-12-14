import React, { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react/cjs/react.development";
const Footer = ({ contact }) => {
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  return (
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
                <strong>SLR Techno & Trade Pvt. Ltd.</strong> is a trading firm
                established in the year 2012 to capitalize the growing
                automobile sector in Nepal. SLR was appointed as the sole
                authorized distributor of Motorhead motorcycles for Nepal by
                Chongqing Fuego Power Co. Ltd. Motorhead Motorcycle is a
                Guinness world record holding company based in China. Motorhead
                earned its world record in 2015 for longest journey in a
                motorcycle, travelling over 35,000km in a single journey.{" "}
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
              {documentToReactComponents(contact.contactDetails)}
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget about-widget">
              <div
                className="d-none d-md-block"
                style={{ marginTop: 94 }}
              ></div>
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
  );
};
export default Footer;
