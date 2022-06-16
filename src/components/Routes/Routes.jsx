import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Favourites from '../Favourites/Favourites';
import Cart from '../Cart/Cart';
import NoMatchRoute from '../NoMatchRoute/NoMatchRoute';


const RoutesComponent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate
                    to="catalog"
                    replace
                />}
            />
            <Route
                path="catalog"
                element={<Catalog />}
            />
            <Route
                path="favourites"
                element={<Favourites />}
            />
            <Route
                path="cart"
                element={<Cart />}
            />
            <Route
                path="*"
                element={<NoMatchRoute />}
            />
        </Routes>
    );
};

export default RoutesComponent;
