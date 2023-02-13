import { CartIcon} from '../../assets/Cart';
import classes from './HeaderButton.module.css';

import { useContext } from 'react';
import { CartContext } from '../../store/cart-store';

export const HeaderButton = props => {
    const cartCtx = useContext(CartContext);
    const cartNumber = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0) 


    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{cartNumber}</span>
        </button>
    )
}