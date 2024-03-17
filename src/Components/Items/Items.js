import React from "react";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="items">
      <img src={props.image} alt="" width={250} />
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
