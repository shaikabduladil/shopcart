import React, { useState } from "react";
import "./payment.css";
import OrderModal from "../orderModal/OrderModal";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const[showOrderModal,setShowOrderModal] = useState(false)
  const navigate = useNavigate();

  const handleSelection = (e) => {
    setSelectedMethod(e.target.value.trim());
  };
  const handlePlaceOrder = () => {
    setShowOrderModal(true)
  };
  const handleGoBack =()=>{
    navigate(-1)
  }
  return (
    
    <div className="container">
        {showOrderModal?<OrderModal/>: <div className="payment-container">
            <button className="back-btn" onClick={handleGoBack}>
              ← Back
            </button>
        <h2>Choose Payment Method</h2>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={handleSelection}
          />
          Cash on Delivery (COD)
        </label>

        <label className="payment-option disabled">
          <input type="radio" name="payment" value="upi" disabled />
          UPI <span className="unavailable-msg"> - Option is not available</span>
        </label>

        <label className="payment-option disabled">
          <input type="radio" name="payment" value="debit" disabled />
          Debit Card <span className="unavailable-msg"> - Option is not available</span>
        </label>

        <label className="payment-option disabled">
          <input type="radio" name="payment" value="credit" disabled />
          Credit Card <span className="unavailable-msg"> - Option is not available</span>
        </label>

        <button
          className="place-order-btn"
          disabled={!selectedMethod}
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>}
     
    </div>
  );
};

export default Payment;
