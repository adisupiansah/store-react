import { createContext, useState, useContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.findIndex((i) => i.id === item.id);

            if (existingItem !== -1) {
                const updateItems = [...prevItems];
                updateItems[existingItem].quantity += 1;

                return updateItems;
            }

            return [...prevItems, { ...item, quantity: 1 }];
        });
    }

    const tambahKuantitas = (id) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
        );
    }

    const kurangKuantitas = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            )
            .filter((item) => item.quantity > 0)
        );
    }

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, tambahKuantitas, kurangKuantitas, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
