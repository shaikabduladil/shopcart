import React, { useState } from "react";
import "./login.css";
import loginBanner from "../../assets/images/login-banner-png.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = (props) => {
  const [signUp, setSignUp] = useState(false);//for showing forms
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center  flex-column">
            {signUp ? (
              <SignUp signup={signUp} setSignUp={setSignUp} />
            ) : (
              <SignIn signup={signUp} setSignUp={setSignUp} showHome = {props?.showHome} setShowHome = {props?.setShowHome} />
            )}
          </div>
          <div className="col-md-6">
            <div className="login-banner-container">
              <img src={loginBanner} alt="login-banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
