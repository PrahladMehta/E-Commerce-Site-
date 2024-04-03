import React, { useEffect, useState } from "react";
import "./Popular.css";
import Items from "../Items/Items";
const Popular = () => {
  const [data_product,setData_product]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/popularinwomen")
    .then((respo)=>respo.json())
    .then((data)=>setData_product(data));
  },[])
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
              id={items.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
