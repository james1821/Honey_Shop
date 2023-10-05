import { useState } from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Banner from './component/Banner'
import Products from './component/Products'
import PasalubongLogo from './assets/img/pasalubong_logo.png'
import HandmadeLogo from "./assets/img/Logo.png"
import Nuts from "/img/Products-nuts.png"
import Flowers from "/img/Flowers.png"
import PriceList from './component/PriceList'; 
import priceListData from './component/Product-list/Prices'; 
import priceListFlowerData from './component/Product-list/FlowerPrices'; 
function App() {


  return (
    <>
     <Nav/>
     <Banner/>
     <Products Product={Nuts} Logo={PasalubongLogo}  />
     {/* <Home/> */}
     <PriceList data={priceListData} />
     <div class="wrapper">
      <div class="divider div-transparent div-tab-down"></div>
    </div>
     <Products Product={Flowers} Logo={HandmadeLogo}  />
     <PriceList data={priceListFlowerData} />
    </>
  
  )
}

export default App
