import React, { useState, useEffect, useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../actions/getProducts";

const ProductDetailsPage = () => {
  const rootRef = useRef(null);
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  async function mount() {
    const response = await getProductDetails(params.id);

    setProductDetail(response);
    console.log(response.images);
  }

  useEffect(() => {
    mount();
  }, [params.id]);

  return (
    <div ref={rootRef}>
      <div className="page-top-info">
        <div className="container">
          <h4>{productDetail.title}</h4>
          <div className="site-pagination">
            <a href="/">Home</a> / Our Products
          </div>
        </div>
      </div>

      <section className="specification-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      {productDetail.title} (PRICE MRP- Rs. {productDetail.price})
                    </button>
                  </div>

                  <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="panel-body">
                      {productDetail.images && <img src={productDetail.images[0].fields.file.url} alt="" className="float-left mr-4" style={{ width: 500 }} />}
                      <div>{documentToReactComponents(productDetail.basicDescription)}</div>
                      {/* {productDetail.basicDescription} */}

                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header" id="headingTwo">
                    <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      Frame & Suspension
                    </button>
                  </div>
                  <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="panel-body">
                      <p>
                        <strong>Front suspension:</strong> Inverted front shocks
                        <br />
                        <strong>Rear suspension:</strong> center shock+oil damp
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header" id="headingThree">
                    <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                      Tyre & Brake
                    </button>
                  </div>
                  <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="panel-body">
                      <p>
                        <strong>Tyre Size (Front):</strong> 110/90-17"
                        <br />
                        <strong>Tyre Size (Rear):</strong> 130/80-17"
                        <br />
                        <strong>Brake Type:</strong> Front&rear hydraulic disc brakes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header" id="headingFour">
                    <button className="panel-link" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                      Electricals
                    </button>
                  </div>
                  <div id="collapse4" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="panel-body">
                      <p>
                        <strong>Speedmeter:</strong> Digital speedometer
                        <br />
                        <strong>Starting Method:</strong> Electric start
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header" id="headingFive">
                    <button className="panel-link" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                      ENGINE
                    </button>
                  </div>
                  <div id="collapse5" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div className="panel-body">
                      <p>
                        <strong>Engine:</strong> Loncin RE250
                        <br />
                        <strong>Engine Type:</strong> Electric start,6gears,air cool,12V/12pole
                        <br />
                        <strong>Configuration:</strong> Carburetor PZ30
                        <br />
                        <strong>Fuel Tank:</strong> 14 L<br />
                        <strong>Bore*stroke/mm:</strong> 65.5×66.2mm
                        <br />
                        <strong>Max Power/km/r/min:</strong> 19 H.p/8000MP
                        <br />
                        <strong>Max Torque/N.m/r/min:</strong> 20N.m/ 6500 rpm
                        <br />
                        <strong>Top Speed:</strong> 120km/h
                        <br />
                        <strong>Ignition method:</strong> DC-CDI
                        <br />
                        <strong>Lubrication method:</strong> Pressure and Splash
                        <br />
                        <strong>Muffler:</strong> CRF Alloy Muffler
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-header" id="headingSix">
                    <button className="panel-link" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                      Transmission
                    </button>
                  </div>
                  <div id="collapse6" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div className="panel-body">
                      <p>
                        <strong>No of Gears:</strong> 6 Gears, manual clutch
                        <br />
                        <strong>Gearshift method:</strong> International
                        <br />
                        <strong>Min.Fuel Consumption:</strong> 2.1L/100KM
                        <br />
                        <strong>Clutch method:</strong> International
                        <br />
                        <strong>Compression Ratio:</strong> 9.2:1
                        <br />
                        <strong>Special configuration:</strong> Headlight,LED signal/taillights
                        <br />
                        <br />* as per company standard; ** Specifications are subject to change
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="container">
          <div className="footer-logo text-center">
            <a href="index.htm">
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
    </div>
  );
};

export default ProductDetailsPage;
