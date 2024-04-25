import React, { useEffect } from "react";
import DisplayItem from "../components/DisplayItem";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../store/Slice/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, []);
  const product = useSelector((state) => state.product.products);

  // const item = {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // };
  return (
    <main>
      <div className="row">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="col-md">
          <div className="items-container">
            {product.map((item) => (
              <DisplayItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
