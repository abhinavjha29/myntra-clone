import React from "react";

const SingleProductDetail = () => {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
    sizeOptions: ["64GB", "128GB", "256GB"],
    colorOptions: ["Black", "White", "Gold"],
  };

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

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
                {product.sizeOptions && (
                  <li className="list-group-item">
                    Sizes: {product.sizeOptions.join(", ")}
                  </li>
                )}
                {product.colorOptions && (
                  <li className="list-group-item">
                    Colors: {product.colorOptions.join(", ")}
                  </li>
                )}
              </ul>
              <button
                className="btn btn-primary"
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
