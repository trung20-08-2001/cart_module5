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

            <Routes>
                <Route path='' element={<Navbar />}>
                    <Route path='' index element={<ProductList />}></Route>
                    <Route path='detail/:id' element={<Detail />}></Route>
                    <Route path='cart' element={<Cart/>} />
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    )
}

export default App;
