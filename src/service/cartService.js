import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk (
    "carts/addToCart",
    async (data) => {
        return data;
    }
)

export const plus = createAsyncThunk(
    "carts/plus",
    async (index) => {
        return index;
    }
)

export const minus = createAsyncThunk(
    "carts/minus",
    async (index) => {
        return index;
    }
)

export const removeFromCart = createAsyncThunk(
    "carts/removeFromCart",
    async (index) => {
        return index;
    }
)