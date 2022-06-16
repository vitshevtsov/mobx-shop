import { observer } from 'mobx-react-lite';
import React from 'react';
import cart from '../../store/cart';

const CatalogItem = observer(({product}) => {
    return (
        <div className="catalog-item">
            <div className="catalog-item_img-wrapper">
                {/* <img
        :src="product.pathToImg"
        alt="product image"
        class="catalog-item_img"
      />
      <icon-favourite
        class="catalog-item_img-icon"
        :isFav="product.isFavourite"
        @onClickFav="onClickFav"
      /> */}
            </div>

            <b>{product.dish}</b>
            <div className="catalog-item_description">{product.description}</div>
            <p>price: { product.price } $</p>

            <button
                className="catalog-item_button button"
                onClick={() => cart.addToCart(product)}
            >
              Добавить в корзину
            </button>
            <div>{cart.cart.length}</div>
        </div>
    );
});

export default CatalogItem;
