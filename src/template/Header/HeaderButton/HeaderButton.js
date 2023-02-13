import classes from './HeaderButton.module.css';
import { CartIcon } from '../../../assets/images/CartIcon';
export const HeaderButton = props => {
    return(
        <button className={classes['button']}>
            <span className={classes['icon']}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes['badge']}>
                3
            </span>
        </button>
    )
}