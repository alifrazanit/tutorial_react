import { CartContext } from './cart-store';
import { useReducer } from 'react';


const defaultCartState = {
    totalAmount: 0,
    items: []
}
const cartReducer = (state, action) => {
    if(action.type === 'INPUT'){
        const updatedItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }
    return defaultCartState;
}

export const CartProvider = props => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = item => {
        dispatchAction({ type: 'INPUT', item: item })
    }

    const removeItemHandler = id => {
        dispatchAction({ type: 'REMOVE', id: id })

    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemHandler,
        removeItem: removeItemHandler,
    }



    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}