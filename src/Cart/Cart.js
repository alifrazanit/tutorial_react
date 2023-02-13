import classes from './Cart.module.css';
import { Modal } from '../template/Modal/Modal';
export const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{id:'c1', name: 'Sushi', amount: 90, price: 300}].map(item => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>34.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClosed}>Closed</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    )
}