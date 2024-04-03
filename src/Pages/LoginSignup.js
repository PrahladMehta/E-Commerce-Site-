import React from "react";
import "./CSS/LoginSignup.css";
import { useState } from "react";
const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("login");

    let responsData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },

      body:JSON.stringify(formData),
    })
      .then((respo) => respo.json())
      .then((data) => responsData = data);

    if (responsData.success) {
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace('/');
    }else{
      alert(responsData.errors)
    }
  };

  const signup = async () => {
    console.log("Signup" + formData);
    console.log(formData);

    let responsData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },

      body:JSON.stringify(formData),
    })
      .then((respo) => respo.json())
      .then((data) => responsData = data);

    if (responsData.success) {
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace('/');
    }else{
      alert(responsData.errors)
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Signup" ? (
            <input
              type="text"
              placeholder="your name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="your email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>
        {state === "Signup" ? (
          <p className="loginsignup-login">
            {" "}
            Already have an account ?{" "}
            <span onClick={() => setState("Login")}> Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            {" "}
            Create an account ?{" "}
            <span onClick={() => setState("Signup")}> Click here</span>
          </p>
        )}

        {state === "Signup" ? (
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continue i agree to term of use and privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
