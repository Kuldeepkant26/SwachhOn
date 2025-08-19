import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'
import NotificationSystem from './components/NotificationSystem.jsx'

import {Route,Routes} from 'react-router-dom'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor.jsx'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <SplashCursor></SplashCursor>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
        <NotificationSystem />
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
