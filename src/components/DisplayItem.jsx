import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/Slice/ProductSlice";
import { Link } from "react-router-dom";

const DisplayItem = ({ item }) => {
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState(false);
  const addState = () => {
    setIsFocused(true);
  };
  const removeState = () => {
    setIsFocused(false);
  };
  const handleAddToBagbtn = (e) => {
    e.preventDefault();

    dispatch(addToCart(item));
  };
  return (
    <div
      className="card item-container border-0 position-relative"
      onMouseEnter={() => addState()}
      onMouseLeave={() => removeState()}
    >
      <Link to={`/single/${item.id}`}>
        <img
          className="item-image "
          src={item.thumbnail}
          alt="item image"
          onClick={() => console.log(item)}
        />
      </Link>
      {isFocused && <button className="btn btn-info">Add to Wishlist</button>}
      <div className="card-body">
        <div className="rating">
          {item.rating} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.category}</div>
        <div className="item-name">{item.title}</div>
        <div className="price">
          <span className="current-price">Rs {item.price}</span>
          {item.discountPercentage && (
            <>
              <span className="original-price">
                Rs
                {(
                  item.price +
                  item.price * (item.discountPercentage / 100)
                ).toFixed(0)}
              </span>
              <span className="discount">
                ({item.discountPercentage.toFixed(0)}% OFF)
              </span>
            </>
          )}
        </div>
        <button className="btn-add-bag" onClick={(e) => handleAddToBagbtn(e)}>
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default DisplayItem;
