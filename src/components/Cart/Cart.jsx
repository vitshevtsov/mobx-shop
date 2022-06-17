import React from 'react';
import List from '../List/List';
import CartItem from '../CartItem/CartItem';
import cart from '../../store/cart';
import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';

const Cart = observer(() => {

    const renderCartItem = (product) => (
        <CSSTransition
            key={product.id}
            classNames="cartItems"
            timeout={500}
        >
            <CartItem product={product} />
        </CSSTransition>
    );

    return (
        <>  
            <List
                items={cart.cart}
                renderItem={renderCartItem}
                hasTransition
            />
            {!cart.cart.length && 'Ваша корзина пуста'}
            {cart.cart.length !== 0 && `Итого: ${cart.totalPrice} $`}
        </>
        
    );
});

export default Cart;
