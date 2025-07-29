import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import {Route,Routes} from 'react-router-dom'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
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
