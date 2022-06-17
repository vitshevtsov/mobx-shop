import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import products from '../../store/products';
import cart from '../../store/cart';


const CartItem = observer(({product}) => {

    const favIcon = product.isFav
        ? <FontAwesomeIcon
            className="icon"
            size="lg"
            color='#f91155'
            icon={faHeartFilled}
            onClick={() => products.toggleFav(product)}
        />
        : <FontAwesomeIcon
            className="icon"
            size="lg"
            color='#f91155'
            icon={faHeartEmpty}
            onClick={() => products.toggleFav(product)}
        />;

    return (
        <div className="cart-item">
            <div className="cart-item_text">
                <b className="cart-item_title">{ product.dish }</b>
                <div className="cart-item_description">{ product.description }</div>
                <p>price: { product.price } $</p>
                {favIcon} 
            </div>
            <button
                className="cart-item_button button"
                onClick={() => cart.removeFromCart(product)}
            >
                Удалить из корзины
            </button>
        </div>
    );
});

export default CartItem;
