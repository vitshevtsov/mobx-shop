import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import List from '../List/List';
import { observer } from 'mobx-react-lite';
import products from '../../store/products';
import { CSSTransition } from 'react-transition-group';

const Favourites = observer(() => {

    const favProducts = products.products.filter(product => product.isFav === true);

    const renderProduct = (product) => 
        <CSSTransition
            key={product.id}
            classNames="favItems"
            timeout={200}
        >
            <CatalogItem product={product} />
        </CSSTransition>;


    return <div className="favourites">
        <List
            items={favProducts}
            renderItem={renderProduct}
            hasTransition
        />
        {!favProducts.length && 'Вы пока не добавили товары в Избранное'}
    </div>;
});

export default Favourites;
