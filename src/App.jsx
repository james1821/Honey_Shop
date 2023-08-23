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
     <Products header="Dalida's Pasalubong" Logo={PasalubongLogo} subtitle='"From the comforting crunch of pan-roasted to the delightful sweetness of sugar-coated peanuts and the spicy allure of our chili garlic oil, we have your cravings covered."'/>

   
    </>
  )
}

export default App
