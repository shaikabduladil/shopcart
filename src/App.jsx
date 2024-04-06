
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Login from './components/login/Login'
import ProductDetails from './components/productDetails/ProductDetails'
import Cart from './components/cart/Cart'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'

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
  {
    showHome? <Navbar showHome = {showHome} setShowHome = {setShowHome}/>:""
  }
 
  <BrowserRouter>
  <Routes>
    {/* <Route path='/' element={<Login/>}/> */}
      <Route path='/' element ={<Home showHome = {showHome} setShowHome = {setShowHome}/>}/>
      {/* <Route path='/login-signup' element={<Login/>}/> */}
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
