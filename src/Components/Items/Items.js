import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
const Items = (props) => {
  console.log("Link");
   console.log(props.id);
  return (
    <div className="items">
    
   <Link to={`/product/${props.id}`}>   <img src={props.image} alt="" width={250} /></Link>
      <p>{props.name}</p>
      <div className="items-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
