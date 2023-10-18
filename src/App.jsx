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
import Works from './component/Works';
function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Products id='Snacks' Product={Nuts} Logo={PasalubongLogo} paddingTop='md:pt-[100px] pt-10' data={priceListData} reverseRow='md:flex-row'/>
      <Products id='Flowers'  Background='#FFD3E0' Product={Flowers} Logo={HandmadeLogo} paddingTop='md:pt-[100px]' data={priceListFlowerData} reverseRow='md:flex-row-reverse' />
      <Works/>
     
    </>
  );
}

export default App;
