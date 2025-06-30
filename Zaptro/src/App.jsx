import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import axios from 'axios'
import Footer from './Components/Footer'
import SingleProduct from './Pages/SingleProduct'



const App = () => {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition( async pos => {
      const {latitude, longitude} = pos.coords
     // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)
        //console.log(exactLocation);


      } catch (error) {
        console.log(error);
      }
    })
  }
  useEffect(()=>{
    getLocation()
  },[])
  return (
   <BrowserRouter>
   <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/products' element={<Products/>} ></Route>
     <Route path='/products/:id' element={<SingleProduct/>} ></Route>
    <Route path='/about' element={<About/>} ></Route>
    <Route path='/contact' element={<Contact/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
    
   </Routes>
   <Footer/>

   </BrowserRouter>
  )
}

export default App
