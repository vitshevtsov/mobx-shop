import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
    return (
        <nav
            className="navbar"
        >
            <Link
                to="catalog"
                className="navbar-logo"
            ><b>MobX<span style={{color: 'orange'}}>Shop</span></b>
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="catalog"
                        className="nav-link"
                    >Каталог
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="favourites"
                        className="nav-link"
                    >Избранное
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="cart"
                        className="nav-link"
                    >Корзина
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavbar;