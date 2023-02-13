import classes from './HeaderButton.module.css';
import { CartIcon } from '../../../assets/images/CartIcon';
import { useContext } from 'react';
import { cartContext } from '../../../store/cart-context';
export const HeaderButton = props => {
    const cartCtx = useContext(cartContext);
    const numberOfCardItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);


    return(
        <button className={classes['button']} onClick={props.onClick}>
            <span className={classes['icon']}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes['badge']}>
                {numberOfCardItems}
            </span>
        </button>
    )
}