import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import Banner from './component/Banner';
import Products from './component/Products';
import PriceList from './component/PriceList'; 
import PasalubongLogo from './assets/img/pasalubong_logo.png';
import HandmadeLogo from "./assets/img/Logo.png";
import Nuts from "/img/Products-nuts.png";
import Flowers from "/img/Flowers.png";
import priceListData from './component/Product-list/Prices'; 
import priceListFlowerData from './component/Product-list/FlowerPrices'; 

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Products Product={Nuts} Logo={PasalubongLogo} padding={10} data={priceListData} />
      <div className="wrapper">
        <div className="divider div-transparent div-tab-down"></div>
      </div>
      <Products Product={Flowers} Logo={HandmadeLogo} padding={0} data={priceListFlowerData} reverseRow='yes' />
      {/* reverseRow makes it possible to alternate the logo and product image for design purpose, 'yes' is just a random string */}
    </>
  );
}

export default App;
