// import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Login from './components/Login'
import Business from './components/Business'
// import { foods } from './components/Daata'
// import { useState } from 'react'

const App = () => {
  // const [data, setData] = useState([...foods])
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Business' element={<Business />} />


    </Routes>
    <Footer />
    </Router>
    </>
    
  )
}

export default App