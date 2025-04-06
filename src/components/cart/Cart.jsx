import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [productsCount, setProductsCount] = useState({});
  const [uniqueProducts, setUniqueProducts] = useState([]);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItems);
  }, []);

  useEffect(() => {
    const productCount = cartItems?.reduce((acc, item) => {
      const { id = "", price = "" } = item || {};
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});
    setProductsCount(productCount);

    const uniqueProduct = cartItems?.reduce((acc, item) => {
      if (!acc.some((product) => product.id === item.id)) {
        acc.push(item);
      }
      return acc;
    }, []);
    setUniqueProducts(uniqueProduct);
  }, [cartItems]);

  useEffect(() => {
    calcTotalPrice();
  }, [productsCount]);

  const calcTotalPrice = () => {
    let totalPrice = 0;
    cartItems?.forEach((item) => {
      totalPrice += productsCount[item.id] * item.price;
    });
    setTotal(totalPrice);
  };

  const incDecProducts = (product, operation) => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const updatedCart = [...cartItems];
    if (operation === "inc") {
      updatedCart.push(product);
    } else if (operation === "dec") {
      const index = cartItems.findIndex((item) => item.id == product.id);
      if (index !== -1) {
        updatedCart.splice(index, 1);
      }
    }
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

  };
  const handleGoBack =()=>{
    navigate(-1)
  }

  return (
    <div>
      <div className="cart-container">
      <button className="back-btn" onClick={handleGoBack}>
              ← Back
            </button>
        <h3 className="text-center mb-4">🛒 Shopping Cart</h3>
        {uniqueProducts?.map((product) => {
          const {
            id = "",
            title = "",
            price = "",
            images = [],
          } = product || {};
          return (
            <div className="cart-item d-flex align-items-center" key={id}>
              <img src={images[0]} alt={title} />
              <div className="ms-3 flex-grow-1">
                <div className="fw-bold">{title}</div>
                <div className="text-muted">Price: ${price}</div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="quantity-btn me-2"
                  onClick={() => incDecProducts(product, "dec")}
                >
                  -
                </button>
                <span className="fw-bold">{productsCount[id]}</span>
                <button
                  className="quantity-btn ms-2"
                  onClick={() => incDecProducts(product, "inc")}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}

        <div className="cart-total">Total: ${total}</div>
        <Link to="/address">
        <button className="checkout-btn mt-3">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
