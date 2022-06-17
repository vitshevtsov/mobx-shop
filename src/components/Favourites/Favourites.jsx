import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import List from '../List/List';
import { observer } from 'mobx-react-lite';
import products from '../../store/products';

const Favourites = observer(() => {

    const favProducts = products.products.filter(product => product.isFav === true);

    const renderProduct = (product) => <CatalogItem
        key={product.id}
        product={product}
    />;

    return <div className="favourites">
        <List
            items={favProducts}
            renderItem={renderProduct}
        />
        {!favProducts.length && 'Вы пока не добавили товары в Избранное'}
    </div>;
});

export default Favourites;
