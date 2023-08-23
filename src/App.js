import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { Route, Routes } from 'react-router'
import NotFound from './components/NotFound'
import Detail from './components/Detail'
import Cart from "./components/Cart"

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='' element={<ProductList />}></Route>
                <Route path='detail/:id' element={<Detail />}></Route>
                <Route path='cart' element={<Cart/>}/>
                {/* <Route path='*' element={<NotFound />}></Route> */}
            </Routes>
        </>
    )
}

export default App;
