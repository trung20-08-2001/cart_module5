import { useDispatch, useSelector } from "react-redux";
import "./style.css"
import { minus, plus,removeFromCart } from "../service/cartService";


function Cart() { 
    const cart=useSelector(state=>state.cart.cart)
    const dispatch=useDispatch()

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index) => {
                        return   (
                            <tr key={item.id}>
                                <td>{item.title }</td>
                                <td><img src={item.thumbnail} width={"200"} height={"100"} alt={item.title} /></td>
                                <td><button className="btn btn-primary"  onClick={()=>dispatch(minus(index))}>-</button>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;<button className=" btn btn-primary" onClick={()=>dispatch(plus(index))}>+</button></td>
                                <td>{item.price*item.quantity}$</td>
                                <td><button className="btn btn-danger" onClick={()=>dispatch(removeFromCart(index))}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Cart;