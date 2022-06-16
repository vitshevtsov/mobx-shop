import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import CatalogItem from '../CatalogItem/CatalogItem';
import products from '../../store/products';

const Catalog = observer(() => {
    // const [products, setProducts] = useState([]);

    // let productsList = [];
    // async function getProducts() {
    //     try {
    //         const response = await axios.get('https://random-data-api.com/api/food/random_food?size=30');
    //         return response.data;
    //     } catch(error) {
    //         console.error('Ошибка:', error);
    //     }
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const products = await getProducts();
            
    //         if (products) {
    //             setProducts(products);
    //         } else {
    //             console.error('Please repeat fetching data');
    //         }
    //     };

    //     fetchData();

    // }, []);

    const productsList = products.products.map(product => <CatalogItem
        key={product.id}
        product={product}
    />);
    console.log('render');

    return <>
        <h2>Catalog</h2>
        {productsList}
    </>;
});

export default Catalog;
