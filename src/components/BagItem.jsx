import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../store/Slice/ProductSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCart = (item) => {
    const id = item.id;

    dispatch(deleteFromCart(id));
  };
  console.log(item);
  const return_period = 14;
  const delivery_date = "2 days";
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.thumbnail} alt={item.title} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.brand}</div>
        <div className="item-name">{item.description}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.price}</span>
          <span className="original-price">
            Rs
            {(
              item.price +
              item.price * (item.discountPercentage / 100)
            ).toFixed(0)}
          </span>
          <span className="discount-percentage">
            ({item.discountPercentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery in
          <span className="delivery-details-days"> {delivery_date}</span>
        </div>
      </div>

      <div
        className="remove-from-cart"
        onClick={() => handleDeleteFromCart(item)}
      >
        X
      </div>
    </div>
  );
};

export default BagItem;
