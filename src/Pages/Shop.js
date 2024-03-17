import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  );
};

export default Shop;
