import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assests/cart_cross_icon.png";
import { ShopContext } from "../../Contexts/ShopContext";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-fromate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cartitems-format cartitems-fromate-main ">
                <img
                  src={item.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cartitem-quantity">
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  className="cartitem-remove-icon"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1> Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
            <button>PROCESS TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promocode enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
