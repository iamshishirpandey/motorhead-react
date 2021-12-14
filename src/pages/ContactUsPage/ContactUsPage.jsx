import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Contact Us</h4>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 contact-info">
              <h3 style={{ color: "#cc3333" }}>Motorhead Nepal</h3>
              <p>
                <strong>Kalanga Complex, Dhobighat, Lalitpur</strong>
              </p>
              <p>
                <strong>Phone:</strong> 01-5542934
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span className="ft-links-alt">
                  <a href="mailto:info@motorheadnepal.com.np" target="_blank">
                    info@motorheadnepal.com.np
                  </a>
                </span>
              </p>

              <div className="contact-social">
                <a
                  href="https://www.facebook.com/motorheadnepal"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">SEND NOW</button>
              </form>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Kalanga%20Complex%2C%20Dhobighat%2C%20Lalitpur%2C%20Nepal+(MotorHead%20Nepal)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
            style={{ border: 0 }}
            allowfullscreen
          >
            <a href="https://www.maps.ie/coordinates.html">
              latitude longitude finder
            </a>
          </iframe>
        </div>
        <br />
      </section>

      <div className="clearfix"></div>
      <br />
    </>
  );
};

export default ContactUsPage;
