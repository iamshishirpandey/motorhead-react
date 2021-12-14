import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import AboutUsIntroductionPage from "./pages/AboutUsIntroductionPage/AboutUsIntroductionPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage/BoardOfDirectorsPage";
import HomePage from "./pages/HomePage/HomePage";
import DealerNetworkPage from "./pages/DealerNetworkPage/DealerNetworkPage";
import CustomerReviewsPage from "./pages/CustomerReviewsPage/CustomerReviewsPage";
import NewsEventsPage from "./pages/NewsEventsPage/NewsEventsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import { getProducts } from "./actions/getProducts";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Footer from "./components/Footer/Footer";
import { getContactUs } from "./actions/getContactUs";

function App() {
  const [products, setProducts] = useState([]);
  const [contact, setContact] = useState({});
  const [aboutUs, setAboutUs] = useState({});

  async function mount() {
    const response = await getProducts();
    const contactUs = await getContactUs();
    setProducts(response);

    setContact(contactUs);
  }

  useEffect(() => {
    mount();
  }, []);

  return (
    <Fragment>
      <Header products={products} />
      <Switch>
        <Route path="/about-us">
          <AboutUsPage />
        </Route>

        <Route path="/aboutus/introduction">
          <AboutUsIntroductionPage />
        </Route>

        <Route path="/aboutus/board-of-directors">
          <BoardOfDirectorsPage />
        </Route>

        <Route path="/board-of-directors">
          <BoardOfDirectorsPage />
        </Route>

        <Route path="/dealer-network">
          <DealerNetworkPage />
        </Route>

        <Route path="/customer-reviews">
          <CustomerReviewsPage />
        </Route>

        <Route path="/news-events">
          <NewsEventsPage />
        </Route>

        <Route path="/product-details/:id">
          <ProductDetailsPage />
        </Route>
        <Route path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route path="/gallery">
          <GalleryPage />
        </Route>
        <Route path="/" exact>
          <HomePage products={products} />
        </Route>
      </Switch>
      {contact.items && <Footer contact={contact.items[0].fields} />}
    </Fragment>
  );
}

export default App;
