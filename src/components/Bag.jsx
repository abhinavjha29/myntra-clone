import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const Bag = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);
  console.log(cartProducts);
  let totalQuantity = useSelector((state) => state.product.totalQuantity);

  let totalMRP = 0;
  let totalDiscountedMRP = 0;
  let fee = 99;
  cartProducts.forEach((item) => {
    totalDiscountedMRP = totalDiscountedMRP + item.quantity * item.price;
    totalMRP =
      totalMRP +
      item.quantity * item.price +
      Number((item.price * (item.discountPercentage / 100)).toFixed(0));
  });
  let totalDiscount = totalMRP - totalDiscountedMRP;
  if (cartProducts.length === 0) {
    fee = 0;
  }
  // console.log("total mrp", totalMRP);
  // console.log(totalDiscountedMRP);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {cartProducts.length === 0 && <h1>...Cart is Empty</h1>}
          {cartProducts.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary
          totalQuantity={totalQuantity}
          totalMRP={totalMRP}
          totalDiscount={totalDiscount}
          fee={fee}
        />
      </div>
    </main>
  );
};

export default Bag;
