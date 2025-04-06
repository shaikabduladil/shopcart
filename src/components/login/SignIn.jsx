import { Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";
import Modal from "../Modal/InfoModal";
import InfoModal from "../Modal/InfoModal";

const SignIn = (props) => {
  const contextData = useContext(AppContext);
  const [loginUserDetails, setLoginUserDetails] = useState({
    email: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUserDetails),
    })
      .then((response) => {
        console.log(response, "response");
        if (response.ok) {
          response.json().then((data) => {
            console.log("loginSuccessful", data); // Data should contain your tokens
            setLoginUserDetails({ name: "", password: "" });
            let tokens = {
              access_token: data?.access_token,
              refresh_token: data?.refresh_token,
            };
            localStorage.setItem("tokenDetails", JSON.stringify(tokens));
            props?.setShowHome(true);
          });
        } else if (response?.status == 401) {
          contextData?.setModalInfo("Please Enter Valid Credentials");
          contextData?.setShowModal(true);
        } else {
          console.log("Error while Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showHidepassword = () => {
    setTogglePassword(!togglePassword);
  };
  return (
    <>
    {
        contextData?.showModal?<InfoModal />: <div>
        <div>
          <h2>Sign in</h2>
        </div>
        <div className="">
          <form className="signIn-form-container" onSubmit={submitLogin}>
            <label>Enter Email</label>
            <div className="user-box">
              <input
                type="text"
                name="email"
                value={loginUserDetails?.name}
                onChange={handleInputChange}
              />
            </div>
  
            <label>Password</label>
            <div className="d-flex user-box">
              <input
                type={togglePassword ? "text" : "password"}
                name="password"
                value={loginUserDetails?.password}
                onChange={handleInputChange}
              />
              <div className="eye" onClick={showHidepassword}>
                {togglePassword ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <button type="submit" className="sign-in-button">
              Sign in
            </button>
            <span onClick={() => props?.setSignUp(true)}>
              New user? Create an Account
            </span>
          </form>
        </div>
      </div>
    }
   
    </>
  );
};

export default SignIn;
