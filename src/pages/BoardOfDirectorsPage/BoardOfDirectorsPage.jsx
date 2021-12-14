import React, { useEffect, useState } from "react";
import { getBoardOfDirectors } from "../../actions/getBoardOfDirectors";

const BoardOfDirectorsPage = () => {
  const [board, setBoard] = useState([]);

  async function mount() {
    const response = await getBoardOfDirectors();
    setBoard(response);
  }

  useEffect(() => {
    mount();
  }, []);
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Board of Directors</h4>
          <div className="site-pagination">
            <a href="/">Home</a> / About Us
          </div>
        </div>
      </div>

      <section className="about-us-section">
        <div className="container">
          <div className="row">
            {board &&
              board.map((item, index) => {
                return (
                  <div className="col-lg-4 col-sm-6">
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src={item.fields.image.fields.file.url} alt="" />
                      </div>
                      <div className="pi-text">
                        <h6>{item.fields.name}</h6>
                        <p align="center">{item.fields.position}</p>
                        <br />
                        <br />
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

export default BoardOfDirectorsPage;
