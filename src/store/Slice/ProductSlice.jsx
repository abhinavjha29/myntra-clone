import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductByPage } from "../API/ProductAPI";
import { act } from "react";
import axios from "axios";

const initialState = {
  allProducts: [],
  cartProducts: [],
  status: "",
  products: [],
  singleProduct: {},
  totalQuantity: 0,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    console.log(response);
    return response.products;
  }
);

export const fetchProductByPageAsync = createAsyncThunk(
  "product/fetchProductsByPage",
  async ({ page, limit }) => {
    console.log(page, limit);
    const response = await fetchProductByPage(page, limit);
    return response.products;
  }
);
export const fetchSingleProductAsync = createAsyncThunk(
  "product/fetchSinglePrdouct",
  async (id) => {
    console.log(id);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cartProducts.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;

      const tempProduct = state.cartProducts.filter((item) => item.id !== id);

      state.cartProducts = tempProduct;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        (state.status = "succes"), (state.allProducts = action.payload);
      })
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchProductByPageAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductByPageAsync.fulfilled, (state, action) => {
        (state.status = "succes"), (state.products = action.payload);
      })
      .addCase(fetchProductByPageAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchSingleProductAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        (state.status = "succes"), (state.singleProduct = action.payload);
      })
      .addCase(fetchSingleProductAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { addToCart, deleteFromCart } = productSlice.actions;
