import classes from './Cart.module.css';
import { Modal } from '../template/Modal/Modal';
import { useContext, useState } from 'react';
import { CartContext } from '../store/cart-store';
import { CartItem } from './CartItems/CartItem';

export const Cart = props => {
    const cartCtx = useContext(CartContext);
    
    const cartItemOnRemoveHandler = item => {
        cartCtx.removeItem({
            ...item
        })
    }
    const cartItemOnAddHandler = item => {
        cartCtx.addItems({
            ...item,
            amount: 1
        })
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemOnRemoveHandler.bind(null, item)}
                    onAdd={cartItemOnAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;
  
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClosed}>Closed</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    )
}