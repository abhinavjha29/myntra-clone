import React from "react";

const DisplayItem = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.rate} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.category}</div>
      <div className="item-name">{item.title}</div>
      <div className="price">
        <span className="current-price">Rs {item.price}</span>
        {item.discount_percentage && (
          <>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </>
        )}
      </div>
      <button
        className="btn-add-bag"
        onClick={() => console.log("item clicked")}
      >
        Add to Bag
      </button>
    </div>
  );
};

export default DisplayItem;
