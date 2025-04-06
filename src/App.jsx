
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Login from './components/login/Login'
import ProductDetails from './components/productDetails/ProductDetails'
import Cart from './components/cart/Cart'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Loaderr from './components/Loader/Loaderr'
import Slider from './components/slider/Slider'
import InfoModal from './components/Modal/InfoModal'
import Payment from './components/payment/Payment'
import Address from './components/address/Address'


function App() {
  const[showHome,setShowHome] = useState(false);
  useEffect(()=>{
    const tokens = JSON.parse(localStorage.getItem("tokenDetails"))
    if(tokens&&tokens?.access_token&&tokens?.refresh_token){
      setShowHome(true)
    }
  },[showHome])
  return (
  <div className='app-container'>
 
 
  <BrowserRouter>
  {
    showHome? <Navbar showHome = {showHome} setShowHome = {setShowHome}/>:""
  }
  <Routes>
    {/* <Route path='/' element={<Login/>}/> */}
      <Route path='/' element ={<Home showHome = {showHome} setShowHome = {setShowHome}/>}/>
      {/* <Route path='/login-signup' element={<Login/>}/> */}
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/slider' element={<Slider/>}/>
      <Route path="/info-model" element={<InfoModal/>}/>
      <Route path='/address' element={<Address/>}/> 
      <Route path='/payment' element={<Payment/>}/>
  </Routes>
  </BrowserRouter>
  {showHome?  <Footer/>:""}
  </div>
  )
}

export default App
