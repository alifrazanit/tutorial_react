import { Modal } from '../../template/Modals/Modals';
import classes from './Cart.module.css';
export const Cart = props => {
    const cartItem = (
        <ul className={classes['cart-items']}>
            {[
                {
                    id: '1',
                    name: 'sushi',
                    amount: 2,
                    price: 12.99
                }
            ].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>30</span>
            </div>
            <div className={classes['actions']}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    )
}