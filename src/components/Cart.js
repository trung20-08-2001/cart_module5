import { useSelector } from "react-redux";
import "./style.css"
import { deleteProduct } from "../service/productService";
import { minus, plus } from "../redux/action";
import store from '../redux/store';

function Cart() {
    const cart = useSelector(state => state)

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {
                        return (
                            <tr>
                                <td>{item.title }</td>
                                <td><img src={item.thumbnail} width={"200"} height={"100"} alt={item.title} /></td>
                                <td><button className="btn btn-primary"  onClick={()=>store.dispatch(minus(item.id))}>-</button>&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;<button className=" btn btn-primary" onClick={()=>store.dispatch(plus(item.id))}>+</button></td>
                                <td>{item.price}$</td>
                                <td><button className="btn btn-danger" onClick={()=>deleteProduct(item.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Cart;