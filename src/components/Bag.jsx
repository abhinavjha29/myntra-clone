import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const cartProducts = useSelector((state) => state.product.cartProducts);
  console.log(cartProducts);
  let totalQuantity = useSelector((state) => state.product.totalQuantity);
  // cartProducts.forEach((item) => {
  //   totalQuantity = totalQuantity + item.quantity;
  // });
  let totalMRP = 0;
  let totalDiscountedMRP = 0;

  cartProducts.forEach((item) => {
    totalDiscountedMRP = totalDiscountedMRP + item.quantity * item.price;
    totalMRP =
      totalMRP +
      item.quantity * item.price +
      Number((item.price * (item.discountPercentage / 100)).toFixed(0));
  });
  let totalDiscount = totalMRP - totalDiscountedMRP;

  // console.log("total mrp", totalMRP);
  // console.log(totalDiscountedMRP);
  console.log(totalDiscount);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {cartProducts.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary
          totalQuantity={totalQuantity}
          totalMRP={totalMRP}
          totalDiscount={totalDiscount}
        />
      </div>
    </main>
  );
};

export default Bag;
