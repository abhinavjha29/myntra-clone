import axios from "axios";

export async function fetchAllProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products?limit=0");
    return response.data;
  } catch (err) {
    console.log("error at api calling", err);
  }
}

export async function fetchProductByFilter() {
  try {
  } catch (err) {
    console.log(err);
  }
}
export async function fetchProductByPage(page, limit) {
  try {
    let skip = Math.abs(page - 1) * limit;
    console.log(limit, skip);
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
