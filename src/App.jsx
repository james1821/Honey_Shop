import { useState } from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Banner from './component/Banner'
import Products from './component/Products'
import PasalubongLogo from './assets/img/pasalubong_logo.png'
import prodList from './component/Product-list/product-list'
function App() {


  return (
    <>
     <Nav/>
     <Banner/>
     <Products header={prodList.prodList[0].prodHead} Logo={PasalubongLogo} subtitle={prodList.prodList[0].prodLine}/>
     {/* <Home/> */}

    </>
  )
}

export default App
