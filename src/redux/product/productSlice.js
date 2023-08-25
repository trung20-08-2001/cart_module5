import {createSlice} from "@reduxjs/toolkit";
import { getAllProduct } from "../../service/productService";
const initialState = {
    products: []
}
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
           state.products= action.payload;
        });
    }
})

export default ProductSlice.reducer;