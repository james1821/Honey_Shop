import { useState } from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Banner from './component/Banner'
import Products from './component/Products'
import PasalubongLogo from './assets/img/pasalubong_logo.png'
function App() {
  

  return (
    <>
     <Nav/>
     <Banner/>
     <Home/>
     <Products header="Dalida's Pasalubong" Logo={PasalubongLogo}/>

   
    </>
  )
}

export default App
