import React from 'react';
import cart from '../../store/cart';

const Cart = () => {
    return (
        <>
            {cart.cart.map(product => <div key={product.id}>{product.dish}</div>)}
        </>
        
    );
};

export default Cart;
