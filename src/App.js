import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router'
import NotFound from './components/NotFound'
import Detail from './components/Detail'
import Cart from "./components/Cart";
import { HashRouter } from "react-router-dom";

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route path='/' index element={<ProductList />}></Route>
                        <Route path='/detail/:id' element={<Detail />}></Route>
                        <Route path='/cart' element={<Cart />} />
                    </Route>
        
                </Routes>
            </HashRouter>

        </>
    )
}

export default App;
