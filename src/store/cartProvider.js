import { CartContext } from './cart-store';
import { useReducer } from 'react';


const defaultCartState = {
    totalAmount: 0,
    items: []
}
const cartReducer = (state, action) => {
    if(action.type === 'INPUT'){
        const existingItemsIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemsIndex];
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        let updatedItem;
        let updatedItems;
        if(existingItem){
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = state.items;
            updatedItems[existingItemsIndex] = updatedItem;
        } else {
            updatedItem = {...action.item};
            updatedItems = state.items.concat(updatedItem);
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        }
    }
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