import React, { useState } from "react";

const SignUp = (props) => {
    //test
    //test12123@gmail.com 
    //test123
    const[userDetails,setUserDetails] = useState({name:"",email:"",password:"",avatar:"https://picsum.photos/800"});
    console.log(userDetails,"userDetails");
    const handleInputChange =(e)=>{
        const{name,value} = e.target;
      setUserDetails((prev)=>{
        return{
            ...prev,
            [name]:value
        }
      })
    }
    const createUSer = (e) =>{
        e.preventDefault();
        fetch(`https://api.escuelajs.co/api/v1/users/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userDetails)
        }).then(response=>{
            if(response.ok){
                console.log("data submitted successfully");
                setUserDetails({
                    name:"",
                    email:"",
                    password:"",
                    avatar:"https://picsum.photos/800",
                })
            }else{
                console.log("Error while Submitting")
            }
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
      <div>
        <form className="signup-form-container" onSubmit={(e)=>createUSer(e)}>
          <label>Name</label>
          <div className="user-box">
          <input type="text" 
          value={userDetails?.name}
          name="name"
          onChange={handleInputChange}
          required
          />
          </div>
          <label>email</label>
           <div className="user-box">
           <input type="email" 
          value={userDetails?.email}
          name="email"
          onChange={handleInputChange}
          required
          />
           </div>
          <label>Password</label>
          <div className="user-box">

          <input type="password"
          value={userDetails?.password}
          name="password"
          onChange={handleInputChange}
          required
          />
          </div>
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
          <span onClick={() => props?.setSignUp(false)}>
            Already have an Account? Sign in!
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
