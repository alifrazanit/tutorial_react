import React from "react";
export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItem: (id) => {}
})