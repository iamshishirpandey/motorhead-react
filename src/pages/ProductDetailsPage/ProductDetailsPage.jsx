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
  }

  useEffect(() => {
    // rootRef.current.innerHTML += `
    //   <script src="/js/jssor.js" type="text/javascript"></script>
    //   <script type="text/javascript">
    //   window.jssor_1_slider_init = function () {
    //     var jssor_1_SlideshowTransitions = [
    //       { $Duration: 1200, $Zoom: 1, $Easing: { $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 },
    //       { $Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: { $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
    //       { $Duration: 1200, $Zoom: 1, $Rotate: 1, $During: { $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $Jease$.$Swing, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$Swing }, $Opacity: 2, $Round: { $Rotate: 0.5 } },
    //       { $Duration: 1000, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Zoom: $Jease$.$InQuint, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } },
    //       { $Duration: 1200, x: 0.5, $Cols: 2, $Zoom: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
    //       { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
    //       { $Duration: 1200, x: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } },
    //       { $Duration: 1000, x: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } },
    //       { $Duration: 1200, x: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } },
    //       { $Duration: 1000, x: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } },
    //       { $Duration: 1200, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } },
    //       { $Duration: 1000, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } },
    //       { $Duration: 1200, x: -4, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.7 } },
    //       { $Duration: 1200, x: 1, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 19 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.8 } },
    //     ];

    //     var jssor_1_options = {
    //       $AutoPlay: 1,
    //       $SlideshowOptions: {
    //         $Class: $JssorSlideshowRunner$,
    //         $Transitions: jssor_1_SlideshowTransitions,
    //         $TransitionsOrder: 1,
    //       },
    //       $ArrowNavigatorOptions: {
    //         $Class: $JssorArrowNavigator$,
    //       },
    //       $ThumbnailNavigatorOptions: {
    //         $Class: $JssorThumbnailNavigator$,
    //         $Rows: 2,
    //         $SpacingX: 14,
    //         $SpacingY: 12,
    //         $Orientation: 2,
    //         $Align: 156,
    //       },
    //     };

    //     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //     /*#region responsive code begin*/

    //     /*var MAX_WIDTH = 960;*/

    //     var MAX_WIDTH = 1145; /*gs*/

    //     function ScaleSlider() {
    //       var containerElement = jssor_1_slider.$Elmt.parentNode;
    //       var containerWidth = containerElement.clientWidth;

    //       if (containerWidth) {
    //         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

    //         jssor_1_slider.$ScaleWidth(expectedWidth);
    //       } else {
    //         window.setTimeout(ScaleSlider, 30);
    //       }
    //     }

    //     ScaleSlider();

    //     $Jssor$.$AddEvent(window, "load", ScaleSlider);
    //     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    //     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    //     /*#endregion responsive code end*/
    //   };

    //   jssor_1_slider_init();
    //   </script>
    // `;
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
      {/* 
    <section className="image-gallery-slider-section">
      <div id="jssor_1" style={{ position: "relative", margin: "0 auto", top: 0, left: 0, width: 960, height: 480, overflow: "hidden", visibility: "hidden", backgroundColor: "#24262e" }}>
        <div data-u="loading" className="jssorl-009-spin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", textAlign: "center", backgroundColor: "rgba(0,0,0,0.7)" }}>
          <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="image-gallery-slider/img/tekken250/spin.svg" />
        </div>
        <div data-u="slides" style="cursor:default;position:relative;top:0px;left:240px;width:720px;height:480px;overflow:hidden;">
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <div>
            <img data-u="image" src="image-gallery-slider/img/tekken250/1-big.jpg" />
            <img data-u="thumb" src="image-gallery-slider/img/tekken250/1-thumb.jpg" />
          </div>
          <a data-u="any" href="https://www.jssor.com" style={{ display: "none" }}>
            web animation composer
          </a>
        </div>

        <div data-u="thumbnavigator" className="jssort101" style={{ position: "absolute", left: 0, top: 0, width: 240, height: 480, backgroundColor: "#000" }} data-autocenter="2" data-scale-left="0.75">
          <div data-u="slides">
            <div data-u="prototype" className="p" style={{ width: 99, height: 66 }}>
              <div data-u="thumbnailtemplate" className="t"></div>
              <svg viewbox="0 0 16000 16000" className="cv">
                <circle className="a" cx="8000" cy="8000" r="3238.1"></circle>
                <line className="a" x1="6190.5" y1="8000" x2="9809.5" y2="8000"></line>
                <line className="a" x1="8000" y1="9809.5" x2="8000" y2="6190.5"></line>
              </svg>
            </div>
          </div>
        </div>

        <div data-u="arrowleft" className="jssora093" style={{ width: 50, height: 50, top: 0, left: 270 }} data-autocenter="2">
          <svg viewbox="0 0 16000 16000" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <circle className="c" cx="8000" cy="8000" r="5920"></circle>
            <polyline className="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>
            <line className="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>
          </svg>
        </div>
        <div data-u="arrowright" className="jssora093" style={{ width: 50, height: 50, top: 0, right: 30 }} data-autocenter="2">
          <svg viewbox="0 0 16000 16000" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <circle className="c" cx="8000" cy="8000" r="5920"></circle>
            <polyline className="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>
            <line className="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>
          </svg>
        </div>
      </div>
      <script type="text/javascript">jssor_1_slider_init();</script>
    </section> */}

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
                      <img src="/img/our-products/tekken250/img1.jpg" alt="" className="float-left mr-4" />
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
