import React from "react";

const SingleProductDetail = () => {
  const product = {
    name: "Sample Product",
    brand: "Sample Brand",
    price: 50.0,
    description: "This is a sample product description.",
    imageUrl: "https://via.placeholder.com/300",
    sizeOptions: ["Small", "Medium", "Large"],
    colorOptions: ["Red", "Blue", "Green"],
    discount: 0.1, // 10% discount
    availability: true,
  };
  const discountedPrice = product.price * (1 - (product.discount || 0));
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
              <p className="card-text">
                <span className="h4">₹{discountedPrice.toFixed(2)}</span>
                {product.discount && (
                  <span className="text-muted ms-2">
                    <del>₹{product.price.toFixed(2)}</del> (
                    {product.discount * 100}%)
                  </span>
                )}
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Description: {product.description}
                </li>
                <li className="list-group-item">
                  Availability:{" "}
                  {product.availability ? "In Stock" : "Out of Stock"}
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
                disabled={!product.availability}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
