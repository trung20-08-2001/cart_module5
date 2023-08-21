import store from "../redux/store";
import { addToCartAction, deleteProductAction, plus } from "../redux/action"
import { useSelector } from "react-redux";

export const addToCart = (data) => {
    store.dispatch(addToCartAction({...data,quantity:1}))
}

export const deleteProduct=(id)=>{
    store.dispatch(deleteProductAction(id))
}