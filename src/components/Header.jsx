import React from "react";
import { FaGrinHearts } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <NavLink to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </NavLink>
      </div>
      <nav className="nav_bar">
        <Link to="/single">Men</Link>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Admin <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="bag">
          <FiShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
