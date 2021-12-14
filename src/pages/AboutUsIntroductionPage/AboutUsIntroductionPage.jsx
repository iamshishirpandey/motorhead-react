import React, { useEffect, useState } from "react";
import { getAboutUs } from "../../actions/getAboutUs";
const AboutUsIntroduction = () => {
  const [board, setBoard] = useState([]);

  async function mount() {
    const response = await getAboutUs();
    setBoard(response);
  }

  useEffect(() => {
    mount();
    console.log(board);
  }, []);
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Introduction</h4>
          <div className="site-pagination">
            <a href="/">Home</a> / About Us
          </div>
        </div>
      </div>

      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="img-margin-bottom">
                <img src="/img/about-us/img1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <strong>SLR Techno & Trade Pvt. Ltd.</strong> is a trading firm
              established in the year 2012 to capitalize the growing automobile
              sector in Nepal. SLR was appointed as the sole authorized
              distributor of Motorhead motorcycles for Nepal by Chongqing Fuego
              Power Co. Ltd. Motorhead Motorcycle is a Guinness world record
              holding company based in China. Motorhead earned its world record
              in 2015 for longest journey in a motorcycle, travelling over
              35,000km in a single journey. We specialize in offering the
              premium quality off-road and dual sport motorcycles in an
              affordable price range. However, we are not only limited to
              selling Motorhead bikes, we also strive to provide reliable after
              sales support to our costumers. Our dealership network is
              established across the major cities of Nepal.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsIntroduction;
