import React from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';
import List from '../List/List';
import { observer } from 'mobx-react-lite';
import products from '../../store/products';

const Catalog = observer(() => {
    
    const renderProduct = (product) => <CatalogItem
        key={product.id}
        product={product}
    />;

    return <div className="catalog">
        {products.isLoadingProducts && 'Список товаров загружается...'}
        <List
            items={products.products}
            renderItem={renderProduct}
        />
    </div>;
});

export default Catalog;
