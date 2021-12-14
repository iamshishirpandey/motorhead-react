import React, { useEffect, useState } from "react";
import { getDealerNetwork } from "../../actions/getDealerNetwork";

const DealerNetworkPage = () => {
  const [dealers, setDealers] = useState([]);

  async function mount() {
    const response = await getDealerNetwork();
    setDealers(response);
  }

  useEffect(() => {
    mount();
  }, []);
  return (
    <>
      <div className="page-top-info">
        <div className="container">
          <h4>Dealer Network</h4>
        </div>
      </div>

      <section className="about-us-section">
        <div className="container">
          <div className="row">
            {dealers.reverse().map((dealer, index) => {
              return (
                <div className="col-lg-3 col-sm-6">
                  <h6 className="border-bottom mb-2 p-2 hd-txt-color">
                    {dealer.fields.name}
                  </h6>
                  <div className="p-2">
                    {dealer.fields.location}
                    <br />
                    Phone: {dealer.fields.telephone}
                    <br />
                    Mobile: {dealer.fields.mobile}
                    <br />
                    <a
                      href="mailto:sales@motorheadnepal.com.np"
                      target="_blank"
                    >
                      {dealer.fields.email}
                    </a>
                  </div>
                  <div
                    className="d-lg-none d-md-block d-sm-block"
                    style={{ marginBottom: 30 }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DealerNetworkPage;
