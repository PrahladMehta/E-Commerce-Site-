import React from "react";
import new_collection from "../Assests/new_collections";
import Items from "../Items/Items";
import "./NewCollection.css";
const NewCollection = () => {
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
