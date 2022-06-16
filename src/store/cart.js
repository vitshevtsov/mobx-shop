import { makeAutoObservable } from "mobx";

class Cart {
    cart = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        this.cart.push(item);
    }
}

export default new Cart();
