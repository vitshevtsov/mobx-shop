import { makeAutoObservable } from "mobx";
import productsData from '../data/products.json';

class Products {
    products = productsData;

    constructor() {
        makeAutoObservable(this);
    }

    toggleFav(product) {
        product.isFav = !product.isFav;
    }
}

export default new Products();
