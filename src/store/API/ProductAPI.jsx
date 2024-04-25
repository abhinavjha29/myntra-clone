import axios from "axios";

export async function fetchAllProducts() {
  try {
    console.log(1);
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    console.log("error at api calling", err);
  }
}
