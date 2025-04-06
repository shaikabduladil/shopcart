import React, { useEffect, useState } from "react";
import "./address.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error message when user starts correcting
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!address.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!address.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(address.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!address.street.trim()) newErrors.street = "Street is required";
    if (!address.city.trim()) newErrors.city = "City is required";
    if (!address.state.trim()) newErrors.state = "State is required";

    if (!address.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      localStorage.setItem("userAddress", JSON.stringify(address));
    }
  };
  const handleBack = () => {
    navigate(-1); 
  };

  useEffect(()=>{
    const savedAddress = JSON.parse(localStorage.getItem("userAddress"))
    if(savedAddress){
        setSubmitted(true)
        setAddress(savedAddress)
    }
  },[])

  return (
    <div className="address-form-container">
        <div className="address-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h2>Shipping Address</h2>
      </div>
      <form className="address-form" onSubmit={handleNext} noValidate>
        {[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Phone Number", name: "phone", type: "number" },
          { label: "Street", name: "street", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "State", name: "state", type: "text" },
          { label: "PinCode", name: "pincode", type: "text" },
        ].map((field, index) => (
          <div className="floating-label-group" key={index}>
            <input
              type={field.type}
              name={field.name}
              value={address[field.name]}
              onChange={handleInputChange}
              placeholder=" "
              required
            />
            <label>{field.label}</label>
            {errors[field.name] && (
              <span className="error-msg">{errors[field.name]}</span>
            )}
          </div>
        ))}
        {!submitted && (
          <button className="next-btn" type="submit">
            Next
          </button>
        )}
      </form>

      {submitted && (
        <div className="address-summary">
          <h3>Address Summary:</h3>
          <p>
            <strong>{address.fullName}</strong>, {address.phone}
            <br />
            {address.street}, {address.city}, {address.state} -{" "}
            {address.pincode}
          </p>
          <button className="next-btn" onClick={() => navigate("/payment")}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
