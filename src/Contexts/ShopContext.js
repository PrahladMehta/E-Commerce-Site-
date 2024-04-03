import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

function getDefault() {
  const cartItems = {};

  for (let index = 0; index < 300 + 1; index++) {
    cartItems[index] = 0;
  }
  return cartItems;
}

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefault());
  const [all_product, setAll_product] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((respo) => respo.json())
      .then((data) => setAll_product(data));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          "Content-Type":"application/json"
        },
        body:""
      })
        .then((respo) => respo.json())
        .then((data) => {
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ itemId: itemsId }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ itemId: itemsId }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
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
