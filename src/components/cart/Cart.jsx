import React, { useEffect, useState } from 'react'

const Cart = () => {
    const[cartItems,setCartItems] = useState();
    useEffect(()=>{
       const cartItems = JSON.parse(localStorage.getItem('cartItems'))
       setCartItems(cartItems)
    },[])
    console.log(cartItems,"cartItems");
  return (
    <div>
      
    </div>
  )
}

export default Cart
