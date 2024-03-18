import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue i agree to term of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
