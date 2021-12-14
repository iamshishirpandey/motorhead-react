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
                              <a
                                className="lightbox"
                                href={"https:" + images.fields.file.url}
                                title={images.fields.file.url}
                              >
                                <img
                                  className="img-fluid image scale-on-hover"
                                  src={"https:" + images.fields.file.url}
                                />
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
    </>
  );
};

export default NewsEventsPage;
