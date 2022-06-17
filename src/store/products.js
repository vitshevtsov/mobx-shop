import { makeAutoObservable, runInAction } from "mobx";
import axios from 'axios';

class Products {
    products = [];
    isLoadingProducts = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleFav(product) {
        product.isFav = !product.isFav;
    }

    async getProducts() {
        try {
            runInAction(() => this.isLoadingProducts = true);
            
            const response = await axios.get('./data/products.json');
            
            if (response.data) {
                runInAction(() => {
                    // таймаут, чтобы увидеть строку лоадера
                    setTimeout(() => {
                        runInAction(() => {
                            this.products = response.data;
                            this.isLoadingProducts = false;
                        });  
                    }, 1200);
                });
            }

        } catch (error) {
            console.error('Ошибка:', error);
        }
        
    }
}

export default new Products();
