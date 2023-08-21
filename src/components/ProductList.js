import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { addToCart } from '../service/productService';
import { useSelector } from 'react-redux';
import { plus } from '../redux/action';
import store from '../redux/store';

function ProductList() {
    const [products, setProducts] = useState([]);
    const cart = useSelector(state => state)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err))
    }, []);

    const add = (data) => {
        for (let i = 0; i < [...cart].length; i++) {
            if (cart[i].id === data.id) {
                return store.dispatch(plus(data.id))
            }
        }
        addToCart(data)
    }

    return (
        <>
            <div className='col-12 row'>
                {products.map(item => {
                    return (
                        <div className="col-3" key={item.id}>
                            <Link to={'detail/' + item.id}> <img className="card-img-top" src={item.thumbnail} width={"100%"} height={"200px"} alt={item.title} /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <div className='row'>
                                    <div className='col-6' ><button width={"100%"} class="btn btn-primary" onClick={() => add(item)}>Add to cart</button></div>
                                    <div className='col-6' width={"100%"}><Link to={'detail/' + item.id} width={"100%"} class="btn btn-danger">Detail</Link></div>
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