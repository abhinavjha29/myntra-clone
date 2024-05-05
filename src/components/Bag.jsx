import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);
  console.log(cartProducts);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem />
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
