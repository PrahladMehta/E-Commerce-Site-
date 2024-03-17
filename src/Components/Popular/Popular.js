import React from "react";
import "./Popular.css";
import data_product from "../Assests/data";
import Items from "../Items/Items";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      

      <div className="popular-items">
        {data_product.map((items, id) => {
          return (
            <Items
              key={id}
              name={items.name}
              image={items.image}
              old_price={items.old_price}
              new_price={items.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
