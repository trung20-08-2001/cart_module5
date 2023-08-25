import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
  'products/getAllProduct',
  async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      return res.data.products;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  }
)


// export const plusProduct = createAsyncThunk(
//   "products/plusProduct",
//   async = (data) => {
//     return data
//   }
// )
