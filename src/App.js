import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router'
import Detail from './components/Detail'
import Cart from "./components/Cart";
import { HashRouter } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='/' index element={<ProductList />}></Route>
                    <Route path='/detail/:index' element={<Detail />}></Route>
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;
