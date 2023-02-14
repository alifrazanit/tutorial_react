import { CartIcon } from '../../assets/Cart';
import classes from './HeaderButton.module.css';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/cart-store';


export const HeaderButton = props => {
    const [isAvailable, setIsAvailable] = useState(false);
    const cartCtx = useContext(CartContext);
    const cartNumber = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)
    const classButton = `${classes.button} ${isAvailable ? classes.bump : ''}`
    const { items } = cartCtx;
    useEffect(() => {
        setIsAvailable(true);
        const timer = setTimeout(() => {
            setIsAvailable(false);
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={classButton} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{cartNumber}</span>
        </button>
    )
}