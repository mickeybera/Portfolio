import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Cards from './components/Cards'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gray-900'>
   <>
   <Navbar/>
   <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        {/* <Cards/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>    
   </Routes>
   <Footer/>
   </>
   </div>
  )
}

export default App