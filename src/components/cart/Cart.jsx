import React, { useEffect, useState } from 'react'

const Cart = () => {
    const[cartItems,setCartItems] = useState();
    useEffect(()=>{
       const cartItems = JSON.parse(localStorage.getItem('cartItems'))
       setCartItems(cartItems);
    },[])
    const uniqueProducts = cartItems?.filter((item,index,self)=>
    index===self.findIndex(obj=>obj.id === item.id)
  );
  const productsWithCount = uniqueProducts?.map((uniqueProduct)=>
  ({
    ...uniqueProduct,
    count:cartItems?.filter((cartItem)=>cartItem.id===uniqueProduct.id)
  })
)
console.log(productsWithCount,"ppppppppppp")
  return (
    <div>
      
    </div>
  )
}

export default Cart
