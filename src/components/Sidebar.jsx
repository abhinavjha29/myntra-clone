import React, { useState } from "react";

const Sidebar = () => {
  const categories = [
    { name: "electronics", isChecked: false },
    { name: "jewelery", isChecked: false },
    { name: "men's clothing", isChecked: false },
    { name: "women's clothing", isChecked: false },
  ];
  const rating = [
    { name: "4.5+", isChecked: false },
    { name: "4+", isChecked: false },
    { name: "3+", isChecked: false },
    { name: "2+", isChecked: false },
  ];
  const handleCheckboxChange = (e) => {
    console.log(e.target.value);
  };
  const handleSortChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-white border border-top-0 mt-10 sidebar-div">
      <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Filter</span>
      </a>
      <hr />

      <div className="mb-3">
        <label htmlFor="categories">Categories:</label>
        <div className="form-check">
          {categories.map((category, index) => (
            <div className="form-check form-check-inline" key={index}>
              <input
                className="form-check-input form-check-input-sm"
                type="radio"
                id={`category-${index + 1}`}
                name="categories[]"
                value={category.name}
                // checked={category.isChecked}
                onChange={(e) => handleCheckboxChange(e)}
              />
              <label
                className="form-check-label text-sm"
                htmlFor={`category-${index + 1}`}
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="d-inline-block">
        <label htmlFor="sortDropdown">Sort by:</label>
        <select
          className="form-select form-select-sm"
          id="sortDropdown"
          // value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="lowest-price">Price (Lowest First)</option>
          <option value="highest-price">Price (Highest First)</option>
          <option value="highest-rating">Rating (Highest First)</option>
        </select>
      </div>
      <hr />
      <div className="mb-3">
        <label htmlFor="categories">Rating:</label>
        <div className="form-check mt-2">
          {rating.map((rating, index) => (
            <div className="form-check " key={index}>
              <input
                className="form-check-input form-check-input-sm"
                type="checkbox"
                id={`rating-${index + 1}`}
                // name="categories[]"
                value={rating.name}
                // checked={category.isChecked}
                onChange={(e) => handleCheckboxChange(e)}
              />
              <label
                className="form-check-label text-sm"
                htmlFor={`category-${index + 1}`}
              >
                {rating.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
