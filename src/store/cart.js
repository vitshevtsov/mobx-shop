import { makeAutoObservable } from "mobx";

class Cart {
    
    cart = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        this.cart.push(item);
    }

    removeFromCart(item) {
        this.cart = this.cart.filter(cartItem => cartItem !== item);
    }

    isInCart(id) {
        return this.cart.find(item => item.id === id)
            ? true
            : false;
    }

    get totalPrice() {
        return this.cart.reduce((sum,item) => sum + item.price, 0);
    }
}

export default new Cart();
