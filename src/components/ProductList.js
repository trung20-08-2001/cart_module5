import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {  getAllProduct } from '../service/productService';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../service/cartService';

function ProductList() {
    const dispatch=useDispatch()
    const products = useSelector(state => {
        return state.products.products;
    })

    useEffect(() => {
        if(products.length===0){
            dispatch(getAllProduct())
        }
    }, [products.length,dispatch]);


    return (
        <>
            <div className='col-12 row'>
                {products.map((item,index) => {
                    return (
                        <div className="col-3" key={item.id}>
                            <Link to={'detail/' + index}> <img className="card-img-top" src={item.thumbnail} width={"100%"} height={"200px"} alt={item.title} /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <div className='row'>
                                    <div className='col-6' ><button width={"100%"} className="btn btn-primary" onClick={() =>dispatch(addToCart(item))}>Add to cart</button></div>
                                    <div className='col-6' width={"100%"}><Link to={'detail/' + index} width={"100%"} className="btn btn-danger">Detail</Link></div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )

}

export default ProductList;