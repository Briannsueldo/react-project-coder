import { createContext, useState } from "react";


export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartCount = () => {
        return cart.reduce((total, items) => total + items.amount, 0);
    }

    const cartPrice = () => {
        return cart.reduce((total, items) => total + items.price * items.amount, 0);
    }

    const cleanCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, setCart, cartCount, cartPrice, cleanCart}}>
            {children}
        </cartContext.Provider>
    )
}