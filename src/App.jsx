import React from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Products from './Pages/Products.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

import {Route,Routes} from 'react-router-dom'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor.jsx'
function App() {
  return (
    <>
    <SplashCursor></SplashCursor>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
