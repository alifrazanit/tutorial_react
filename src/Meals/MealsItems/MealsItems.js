import { MealsItemForm } from '../MealsItemForm/MealsItemForm';
import classes from './MealsItems.module.css';
import { CartContext } from '../../store/cart-store';
import { useContext } from 'react';
export const MealsItems = props => {
    const price = `$${props.price.toFixed(2)}`;
    const cartContext = useContext(CartContext);
    const onAddToCartHandler = amount => {
        cartContext.addItems({
            amount,
            price: props.price,
            name: props.name,
            id: props.id,
        })
    }
    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm onAddToCart={onAddToCartHandler}/>
            </div>
        </li >
    )
}