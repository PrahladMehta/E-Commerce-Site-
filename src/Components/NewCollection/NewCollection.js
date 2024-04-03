import React, { useEffect, useState } from "react";

import Items from "../Items/Items";
import "./NewCollection.css";
const NewCollection = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((respo) => respo.json())
      .then((data) => setNew_collection(data));
  },[]);
  return (
    <div>
      <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection">
          {new_collection.map((items, i) => {
            return (
              <Items
                key={i}
                name={items.name}
                image={items.image}
                old_price={items.old_price}
                new_price={items.new_price}
                id={items.id}
              ></Items>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
