import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./TestHeader.css";
import { useSelector } from "react-redux";
const TestHeader = () => {
  let totalQuantity = useSelector((state) => state.product.totalQuantity);

  return (
    <>
      <div className="navbar-div">
        <Link to="/">
          <img
            style={{
              width: "100%",
              height: "40px",
              marginLeft: "2%",
              marginRight: "2%",
            }}
            src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
            alt=""
          />
        </Link>

        <div className="link1">
          <Link
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            to="/Men"
          >
            MEN
          </Link>
          <div className="ddown">
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Topwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                </ul>
                <ul className="nextul">
                  <li>Indian & Festive Wear</li>
                  <li>Kurtas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Bottom Wear</li>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                </ul>

                <ul className="nextul">
                  <li>Innerwear & Sleepwear</li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermals</li>
                </ul>
                <ul className="nextul">
                  <li>Plus Size</li>
                  <li>S, M, L, XL, XXl, XXl</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Sports Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>
                </ul>
                <ul className="nextul">
                  <li>Personal Care & Grooming</li>
                  <li>Lotions</li>
                  <li>Shaving kit</li>
                </ul>
                <ul className="nextul">
                  <li>Watches</li>
                  <li>Fastrack</li>
                  <li>Puma</li>
                  <li>Rado</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Sports & Active Wear</li>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                </ul>
                <ul className="nextul">
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Fashion Accessories</li>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                </ul>
                <ul className="nextul">
                  <li>Bags & Backpacks</li>
                  <li>Reebok</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="link1">
          <Link
            className="link"
            style={{
              marginLeft: "3%",
              marginBottom: "-2%",
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            to="/Women"
          >
            WOMEN
          </Link>
          <div
            className="ddown"
            style={{
              marginLeft: "-100px",
            }}
          >
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Indian & Fusion Wear</li>
                  <li>Kurtas & Suits</li>
                  <li>Kurtis, Tunics & Tops</li>
                  <li>Ethnic Wear</li>
                  <li>Leggings, Salwars & Churidars</li>
                  <li>Skirts & Palazzos</li>
                  <li>Sarees</li>
                  <li>Dress Materials</li>
                  <li>Lehenga Cholis</li>
                  <li>Dupattas & Shawls</li>
                  <li>Jackets</li>
                </ul>

                <ul className="nextul">
                  <li>Belts, Scarves & More</li>
                </ul>
                <ul className="nextul">
                  <li>Watches & Wearables</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Western Wear</li>
                  <li>Dresses</li>
                  <li>Jumpsuits</li>
                  <li>Tops</li>
                  <li>Jeans</li>
                  <li>Trousers & Capris</li>
                  <li>Shorts & Skirts</li>
                  <li>Shrugs</li>
                  <li>Sweaters & Sweatshirts</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                </ul>

                <ul className="nextul">
                  <li>Plus Size</li>
                </ul>
                <ul className="nextul">
                  <li>Sunglasses & Frames</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Heels</li>
                  <li>Boots</li>
                  <li>Sports Shoes & Floaters</li>
                </ul>

                <ul className="nextul">
                  <li>Sports & Active Wear</li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Lingerie & Sleepwear</li>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Shapewear</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Swimwear</li>
                  <li>Camisoles & Thermals</li>
                </ul>

                <ul className="nextul">
                  <li>Beauty & Personal Care</li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Premium Beauty</li>
                  <li>Lipsticks</li>
                  <li>Fragrances</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>

                <ul className="nextul">
                  <li>Jewellery</li>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>
                </ul>
                <ul className="nextul">
                  <li>Backpacks</li>
                </ul>
                <ul className="nextul">
                  <li>Handbags, Bags & Wallets</li>
                </ul>
                <ul className="nextul">
                  <li>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="link1">
          <Link
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/Kids"
          >
            ELECTRONICS
          </Link>
          <div
            className="ddown"
            style={{
              marginLeft: "-200px",
            }}
          >
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Boys Clothing</li>
                  <li>T-Shirts</li>
                  <li>Shirts</li>
                  <li>Shorts</li>
                  <li>Jeans</li>
                  <li>Trousers</li>
                  <li>Clothing Sets</li>
                  <li>Ethnic Wear</li>
                  <li>Track Pants & Pyjamas</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Party Wear</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Girls Clothing</li>
                  <li>Dresses</li>
                  <li>Tops</li>
                  <li>Tshirts</li>
                  <li>Clothing Sets</li>
                  <li>Lehenga choli</li>
                  <li>Kurta Sets</li>
                  <li>Party wear</li>
                  <li>Dungarees & Jumpsuits</li>
                  <li>Skirts & shorts</li>
                  <li>Tights & Leggings</li>
                  <li>Jeans, Trousers & Capris</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Flipflops</li>
                  <li>Sports Shoes</li>
                  <li>Flats</li>
                  <li>Sandals</li>
                  <li>Heels</li>
                  <li>School Shoes</li>
                  <li>Socks</li>
                </ul>

                <ul className="nextul">
                  <li>Toys</li>
                  <li>Learning & Development</li>
                  <li>Activity Toys</li>
                  <li>Soft Toys</li>
                  <li>Action Figure / Play set</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Infants</li>
                  <li>Bodysuits</li>
                  <li>Rompers & Sleepsuits</li>
                  <li>Clothing Sets</li>
                  <li>Tshirts & Tops</li>
                  <li>Dresses</li>
                  <li>Bottom wear</li>
                  <li>Winter Wear</li>
                  <li>Innerwear & Sleepwear</li>
                  <li>Infant Care</li>
                </ul>

                <ul className="nextul">
                  <li>Home & Bath</li>
                </ul>
                <ul className="nextul">
                  <li>Home & Bath</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Kids Accessories</li>
                  <li>Bags & Backpacks</li>
                  <li>Watches</li>
                  <li>Jewellery & Hair accessory</li>
                  <li>Sunglasses</li>
                  <li>Masks & Protective Gears</li>
                  <li>Caps & Hats</li>
                </ul>

                <ul className="nextul">
                  <li>Brands</li>
                  <li>H&M</li>
                  <li>Max Kids</li>
                  <li>Pantaloons</li>
                  <li>United Colors Of Benetton Kids</li>
                  <li>YK</li>
                  <li>U.S. Polo Assn. Kids</li>
                  <li>Mothercare</li>
                  <li>HRX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="link1">
          <Link
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/Beauty"
          >
            JEWELLERY
          </Link>
          <div
            className="ddown"
            style={{
              marginLeft: "-300px",
            }}
          >
            <div className="flex">
              <div className="a1">
                <ul>
                  <li>Bed Linen & Furnishing</li>
                  <li>Bedsheets</li>
                  <li>Bedding Sets</li>
                  <li>Blankets, Quilts & Dohars</li>
                  <li>Pillows & Pillow Covers</li>
                  <li>Bed Covers</li>
                </ul>

                <ul className="nextul">
                  <li>Flooring</li>
                  <li>Carpets</li>
                  <li>Floor Mats & Dhurries</li>
                  <li>Door Mats</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Bath</li>
                  <li>Bath Towels</li>
                  <li>Hand & Face Towels</li>
                  <li>Beach Towels</li>
                  <li>Towels Set</li>
                  <li>Bath Rugs</li>
                  <li>Bath Robes</li>
                  <li>Bathroom Accessories</li>
                </ul>

                <ul className="nextul">
                  <li>Lamps & Lighting</li>
                  <li>Floor Lamps</li>
                  <li>Ceiling Lamps</li>
                  <li>Table Lamps</li>
                  <li>Wall Lamps</li>
                  <li>Outdoor Lamps</li>
                  <li>String Lights</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Home Décor</li>
                  <li>Plants & Planters</li>
                  <li>Aromas & Candles</li>
                  <li>Clocks</li>
                  <li>Mirrors</li>
                  <li>Wall Décor</li>
                  <li>Wall Shelves</li>
                  <li>Fountains</li>
                  <li>Showpieces & Vases</li>
                </ul>

                <ul className="nextul">
                  <li>Cushions & Cushion Covers</li>
                </ul>

                <ul className="nextul">
                  <li>Curtains</li>
                </ul>

                <ul className="nextul">
                  <li>Home Gift Sets</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Kitchen & Table</li>
                  <li>Dinnerware & Serveware</li>
                  <li>Cups and Mugs</li>
                  <li>Bakeware & Cookware</li>
                  <li>Kitchen Storage & Tools</li>
                  <li>Bar & Drinkware</li>
                  <li>Table Covers & Furnishings</li>
                </ul>

                <ul className="nextul">
                  <li>Storage</li>
                  <li>Organisers</li>
                  <li>Hooks & Holders</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Brands</li>
                  <li>Home Centre</li>
                  <li>Spaces</li>
                  <li>D'Decor</li>
                  <li>Portico New York</li>
                  <li>Pure Home & Living</li>
                  <li>Swayam</li>
                  <li>Raymond Home</li>
                  <li>Maspar</li>
                  <li>Corelle</li>
                  <li>Trident</li>
                  <li>Cortina</li>
                  <li>Story@Home</li>
                  <li>Random</li>
                  <li>Ellementry</li>
                  <li>ROMEE</li>
                  <li>SEJ by Nisha Gupta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="link1">
          <Link
            className="link"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/admin"
          >
            ADMIN
          </Link>
          <div
            className="ddown"
            style={{
              marginLeft: "-400px",
            }}
          ></div>
        </div>
        <h4 className="nw">NEW</h4>
        <div className="inp1">
          <input
            type="text"
            className="inp"
            placeholder="Search for products, brands and more"
          />
        </div>
        <p style={{ marginLeft: "4%" }}>
          <img
            style={{ marginLeft: "15%", fontSize: "12px" }}
            src="https://img.icons8.com/material-outlined/24/000000/gender-neutral-user.png"
            alt=""
          />
          <br></br>
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
        <p style={{ marginLeft: "2%" }}>
          <img
            style={{ marginLeft: "25%" }}
            src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
            alt=""
          />
          <br></br>
          <span>Wishlist</span>
        </p>
        <NavLink
          style={{
            marginLeft: "2%",
            fontSize: "15px",
            textDecoration: "none",
            color: "#282C3F",
          }}
          to="/cart"
        >
          <p>
            <img
              style={{ marginLeft: "3%" }}
              src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
              alt=""
            />
            <br></br>
            <span>Bag</span>
            <span className="badge rounded-pill bag-item-count">
              {totalQuantity}
            </span>
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default TestHeader;
