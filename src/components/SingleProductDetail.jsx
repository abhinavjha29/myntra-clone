import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  fetchSingleProductAsync,
} from "../store/Slice/ProductSlice";

const SingleProductDetail = () => {
  const dispatch = useDispatch();

  // const product = {
  //   id: 1,
  //   title: "iPhone 9",
  //   description: "An apple mobile which is nothing like apple",
  //   price: 549,
  //   discountPercentage: 12.96,
  //   rating: 4.69,
  //   stock: 94,
  //   brand: "Apple",
  //   category: "smartphones",
  //   thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  //   images: [
  //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  //   ],
  //   sizeOptions: ["64GB", "128GB", "256GB"],
  //   colorOptions: ["Black", "White", "Gold"],
  // };
  const { id } = useParams();
  console.log(id);

  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);

    console.log(e.target.value);
  };

  useEffect(() => {
    const getSingleItem = (id) => {
      dispatch(fetchSingleProductAsync(id));
    };
    getSingleItem(id);
  }, []);

  const product = useSelector((state) => state.product.singleProduct);

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  const handlecartBtn = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };
  return (
    <div className="container single-product-container">
      <div className="row">
        <div className="col-md-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={image}
                    className="d-block w-100 h-100"
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
              <p className="card-text">
                <span className="h4">₹{discountedPrice.toFixed(2)}</span>
                {product.discountPercentage && (
                  <span className="text-muted ms-2">
                    <del>₹{product.price.toFixed(2)}</del> (
                    {product.discountPercentage}% OFF)
                  </span>
                )}
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Description: {product.description}
                </li>
                <li className="list-group-item">
                  Availability:{" "}
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </li>

                <li className="list-group-item mt-10">
                  Sizes:
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="size"
                      id="smallSize"
                      value="S"
                      checked={selectedSize === "S"}
                      onChange={handleSizeChange}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="smallSize"
                    >
                      S
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="size"
                      id="mediumSize"
                      value="M"
                      checked={selectedSize === "M"}
                      onChange={handleSizeChange}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="mediumSize"
                    >
                      M
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="size"
                      id="largeSize"
                      value="L"
                      checked={selectedSize === "L"}
                      onChange={handleSizeChange}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="largeSize"
                    >
                      L
                    </label>
                  </div>
                </li>

                {/* <li className="list-group-item">
                  Colors:
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio1">
                   
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio2">
                      Radio 2
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio3">
                      Radio 3
                    </label>
                  </div>
                </li> */}
              </ul>
              <hr />
              <button
                className="btn btn-primary"
                onClick={() => handlecartBtn(product)}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? "Add to Bag" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
