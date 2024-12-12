import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'
import Products from './pages/Products'
import MegaSale from './components/MegaSale'
import DesigningFlex from './components/DesigningFlex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
    <MegaSale/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </>
    
  )
}
