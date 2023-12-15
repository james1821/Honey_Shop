import React, { useState, useEffect } from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Banner from "./component/Banner";
import Products from "./component/Products";
import PriceList from "./component/PriceList";
import PasalubongLogo from "./assets/img/pasalubong_logo.png";
import HandmadeLogo from "./assets/img/Logo.png";
import Nuts from "/img/Products-nuts.png";
import Flowers from "/img/Flowers.png";
import priceListData from "./component/Product-list/Prices";
import priceListFlowerData from "./component/Product-list/FlowerPrices";
import Customers from "./component/Customers";
import Promotional from "./component/Promotional";
import FacebookMessenger from "./component/FacebookMessenger";
import Testimonials from "./component/Testimonials";
import About from "./component/About";
import Loading from "./component/Loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Banner />
          <About />
          <Products
            Product={Flowers}
            Logo={HandmadeLogo}
            data={priceListFlowerData}
          />
          <Promotional />
          <Customers />
          <Testimonials />
          <FacebookMessenger />
        </>
      )}
    </>
  );
}

export default App;
