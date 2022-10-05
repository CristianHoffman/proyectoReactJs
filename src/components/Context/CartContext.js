import React, {createContext, useContext, useState} from "react"
export const CartContext = createContext([])
export const useCartContext =  () => useContext(CartContext)

const CartProvieder = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCarrito(carrito.map(product =>{
                return product.id === item.id ? { ...item,quantity: product.quantity + quantity} : product
            }));
        }else {
            setCarrito([ ...carrito, {...item,quantity}]);
        }
    }
    console.log(carrito)

    const removeItem = (id) => setCarrito(carrito.filter(product => product.id !== id));
    
    const clear = () => setCarrito([]);
    
    const isInCart = (id) => carrito.find (product => product.id === id) ? true : false;
    
    




    return (
        <CartContext.Provider value={{ clear, isInCart, removeItem, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvieder