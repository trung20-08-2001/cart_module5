import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/productSlice';
import cartSlide from './cart/cartSlide';



const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlide
    }
    
})

export default store;