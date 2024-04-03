import React from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import drop_down from "../Assests/dropdown_icon.png";
export default function Navbar() {
  const [menu, setMenu] = new useState("shop");
  const { getTotalItem } = useContext(ShopContext);

  const menuRef = useRef();

  const drop_down_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visiable");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img
        src={drop_down}
        alt=""
        onClick={drop_down_toggle}
        className="nav-dropdown"
      />
      <ul className="nav-menu" ref={menuRef}>
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
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Log in</button>
          </Link>
        )}

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalItem()}</div>
      </div>
    </div>
  );
}
