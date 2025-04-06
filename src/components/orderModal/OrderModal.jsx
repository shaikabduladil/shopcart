import React from "react";
import "./orderModal.css";
import { Link } from "react-router-dom";

const OrderModal = () => {
    const handleClose =()=>{
        localStorage.removeItem("cartItems")
    }
  return (
    <div className="modal-backdrop">
      <div className="order-modal">
        <h3>✅ Order Placed Successfully!</h3>
        <p>Thank you for shopping with us. Your order will be delivered soon.</p>
        <Link to="/">
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderModal;
