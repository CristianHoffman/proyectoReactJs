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

    const precioTotal = () =>{
        return carrito.reduce((acc,producto) => acc + producto.quantity * producto.price, 0);
    }
    const productoTotal = () => {
        carrito.reduce((acc, producto) => acc + producto.cantidad * producto.price, 0)
    }
    
    




    return (
        <CartContext.Provider value={{ clear, isInCart, removeItem, addItem, precioTotal, productoTotal, carrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvieder