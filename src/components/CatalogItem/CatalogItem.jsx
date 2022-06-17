import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import products from '../../store/products';
import cart from '../../store/cart';

const CatalogItem = observer(({product}) => {

    const favIcon = product.isFav
        ? <FontAwesomeIcon
            className="icon catalog-item_img-icon"
            size="lg"
            color='#f91155'
            icon={faHeartFilled}
            onClick={() => products.toggleFav(product)}
        />
        : <FontAwesomeIcon
            className="icon catalog-item_img-icon"
            size="lg"
            color='#f91155'
            icon={faHeartEmpty}
            onClick={() => products.toggleFav(product)}
        />;

    const addInCartButton = (cart.isInCart(product.id))
        ? <button
            className="catalog-item_button button"
            disabled
            onClick={() => cart.addToCart(product)}
        >
    Товар уже в корзине
        </button>
        : <button
            className="catalog-item_button button"
            onClick={() => cart.addToCart(product)}
        >
    Добавить в корзину
        </button>;

    return (
        <div className="catalog-item">
            <div className="catalog-item_img-wrapper">
                {favIcon} 
            </div>
            <b>{product.dish}</b>
            <div className="catalog-item_description">{product.description}</div>
            <p>price: {product.price} $</p>
            {addInCartButton}
        </div>
    );
});

export default CatalogItem;
