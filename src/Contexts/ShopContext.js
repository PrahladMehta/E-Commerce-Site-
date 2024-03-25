import React, { createContext, useState } from "react";
import all_product from "../Components/Assests/all_product";

export const ShopContext = createContext();

function getDefault() {
  const cartItems = {};

  for (let index = 0; index < all_product.length; index++) {
    cartItems[index] = 0;
  }
  return cartItems;
}

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefault());

  const addToCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));

  };

  const removeFromCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
  };

  const getTotalAmount = () => {
    let toatlAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let product = all_product.find((p) => p.id === Number(item));
        toatlAmount += product.new_price * cartItems[item];
      }
    }

    return toatlAmount;
  };

  const getTotalItem = () => {
    let totalItem = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem++;
      }
    }

    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalItem,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
