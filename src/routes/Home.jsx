import React, { useEffect, useState } from "react";
import DisplayItem from "../components/DisplayItem";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductsAsync,
  fetchProductByPageAsync,
} from "../store/Slice/ProductSlice";
import Pagination from "../components/Pagination";
import { fetchProductByPage } from "../store/API/ProductAPI";

const Home = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAsync());
    dispatch(fetchProductByPageAsync({ page, limit }));
  }, [page]);

  const productQuantity = useSelector(
    (state) => state.product.allProducts.length
  );
  console.log(productQuantity);
  const product = useSelector((state) => state.product.products);
  console.log(useSelector((state) => state.product.totalQuantity));
  const limit = 12;
  let totalPages = Math.floor(productQuantity / limit) + 1;
  console.log(page);
  const handlePagination = () => {};
  return (
    <main className="main-class">
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
          <div className="pagination-container">
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
