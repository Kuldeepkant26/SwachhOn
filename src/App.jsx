import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
