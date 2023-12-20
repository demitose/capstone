import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems ] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems ([...cartItems,item])
    }
    const handleRemoveCart = (id) => {
const updatedCart = cartItems.filter(item =>item.id!==id)
setCartItems (updatedCart)
    }

    return (
        <CartContext.Provider value={{cartItems, handleAddToCart, handleRemoveCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}
