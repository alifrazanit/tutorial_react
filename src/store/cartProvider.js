import { cartContext } from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    console.log('STATE', state)
    if(action.type === 'INPUT'){
        const updatedItems = state.items.concat(action.item)
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }
    return defaultCartState;
}

export const cartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        console.log('ADD', item)
        dispatchCart({ type: 'INPUT', item: item})
    }

    const removeItemHandler = id => {
        dispatchCart({ type: 'REMOVE', id: id})
    }
    const defaultValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <cartContext.Provider value={defaultValue}>
            {props.children}
        </cartContext.Provider>
    )
}