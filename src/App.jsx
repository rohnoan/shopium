import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'
import Products from './pages/Products'

export default function App() {
  return (
    <div  className='text-2xl'>
      <Navbar/>
      <Products/>
    </div>
  )
}
