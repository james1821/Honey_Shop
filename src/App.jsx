import { useState } from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Banner from './component/Banner'
import Products from './component/Products'
function App() {
  

  return (
    <>
     <Nav/>
     <Banner/>
     <Home/>
     <Products header="Pasalubong"/>
     <Products header="Money Bouquet"/>
   
    </>
  )
}

export default App
