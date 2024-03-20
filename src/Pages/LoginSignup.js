import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          {" "}
          Already have an account ? <span> Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue i agree to term of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
