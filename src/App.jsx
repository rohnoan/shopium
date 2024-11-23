import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'

export default function App() {
  return (
    <div  className='text-2xl'>
      <Navbar/>
      <Home/>
    </div>
  )
}
