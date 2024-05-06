import React from "react";

const BagItem = ({ item }) => {
  // const item = {
  //   id: 9,
  //   title: "Infinix INBOOK",
  //   description:
  //     "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  //   price: 1099,
  //   discountPercentage: 11.83,
  //   rating: 4.54,
  //   stock: 96,
  //   brand: "Infinix",
  //   category: "laptops",
  //   thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
  //   images: [
  //     "https://cdn.dummyjson.com/product-images/9/1.jpg",
  //     "https://cdn.dummyjson.com/product-images/9/2.png",
  //     "https://cdn.dummyjson.com/product-images/9/3.png",
  //     "https://cdn.dummyjson.com/product-images/9/4.jpg",
  //     "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
  //   ],
  // };
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
        onClick={() => console.log(" item deleted")}
      >
        X
      </div>
    </div>
  );
};

export default BagItem;
