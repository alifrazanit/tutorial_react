import { CartIcon} from '../../assets/Cart';
import classes from './HeaderButton.module.css';
export const HeaderButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}