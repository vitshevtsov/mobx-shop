import React from 'react';
import List from '../List/List';
import CartItem from '../CartItem/CartItem';
import cart from '../../store/cart';
import { observer } from 'mobx-react-lite';

const Cart = observer(() => {

    const renderCartItem = (product) => <CartItem
        key={product.id}
        product={product}
    />;

    return (
        <>  
            <List
                items={cart.cart}
                renderItem={renderCartItem}
            />
            {!cart.cart.length && 'Ваша корзина пуста'}
        </>
        
    );
});

export default Cart;
