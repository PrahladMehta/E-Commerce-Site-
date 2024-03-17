import React from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = new useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Shop
          </Link>

          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          {" "}
          <Link to="/mens" style={{ textDecoration: "none" }}>
            {" "}
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          {" "}
          <Link to="/womens" style={{ textDecoration: "none" }}>
            {" "}
            Women
          </Link>{" "}
          {menu === "women" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/kids" style={{ textDecoration: "none" }}>
            {" "}
            Kid
          </Link>{" "}
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
