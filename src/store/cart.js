import { makeAutoObservable } from "mobx";

class Cart {
    cart = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        this.cart.push(item);
    }

    isInCart(id) {
        return this.cart.find(item => item.id === id)
            ? true
            : false;
    }
}

export default new Cart();
