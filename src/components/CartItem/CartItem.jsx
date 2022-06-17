import React from 'react';
import { observer } from 'mobx-react-lite';

const CartItem = observer(({product}) => {
    return (
        <div className="cart-item">
            {/* <img :src="product.pathToImg" alt="product image" class="cart-item_img" /> */}
            <div className="cart-item_text">
                <b className="cart-item_title">{ product.dish }</b>
                <div className="cart-item_description">{ product.description }</div>
                <p>price: { product.price } $</p>
                <div className="cart-item_quantity-and-icon-wrapper">
                    {/* <icon-favourite :isFav="isFavourite" @onClickFav="onClickFav" /> */}
                </div>
            </div>
            <button
                className="cart-item_button button"
                onClick="onRemoveClick"
            >
      Удалить из корзины
            </button>
        </div>
    );
});

export default CartItem;
