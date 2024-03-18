import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Items from "../Components/Items/Items";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="shopcategory-banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>show 1-12 </span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="sortcategory-products">
        {
          all_product.map((items,i)=>{

            if(items.category===props.category){
              return <Items key={i}   
                name={items.name}
                image={items.image}
                old_price={items.old_price}
                new_price={items.new_price} ></Items>
            }else{
              return null;
            }

          })
        }
      </div>

      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
