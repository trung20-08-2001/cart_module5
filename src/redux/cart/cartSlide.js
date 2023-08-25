import { createSlice } from "@reduxjs/toolkit"
import { addToCart, minus, plus, removeFromCart } from "../../service/cartService"

const initialState = {
    cart: []
}

const cartSile = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            if (state.cart.length === 0) {
                state.cart.push({ ...action.payload, quantity: 1 })
            } else {
                let check = false;
                for (let i = 0; i < state.cart.length; i++) {
                    if (state.cart[i].id === action.payload.id) {
                        state.cart[i].quantity += 1
                        check = true;
                        break
                    }
                }
                if (!check) {
                    state.cart.push({ ...action.payload, quantity: 1 })
                }

            }
        })
        builder.addCase(plus.fulfilled, (state, action) => {
            state.cart[action.payload].quantity++;
        })
        builder.addCase(minus.fulfilled, (state, action) => {
            if (state.cart[action.payload].quantity > 0) {
                state.cart[action.payload].quantity--;
            }
        })
        builder.addCase(removeFromCart.fulfilled, (state, action) => {
            state.cart.splice(action.payload, 1);
        })
    }
})

export default cartSile.reducer;