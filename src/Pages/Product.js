import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  console.log("BREADCRM PEODUCT");
  console.log(productId);
  console.log(all_product);

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
    </div>
  );
};

export default Product;
