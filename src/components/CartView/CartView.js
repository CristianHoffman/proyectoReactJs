import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

export const CartView = () =>{
 const {carrito, precioTotal} = useCartContext()
     
    if(carrito.length === 0){
        return (
            <>
            <p className="text-center fs-3 pt-5">Aun no agregaste nada al carrito.</p>
            <Link to={"/"}><p className="text-center text-success fs-4">Volver a comprar</p></Link>
            </>
        )
    }

    return(
        <>
        {
            carrito.map(product => <CartItem key={product.id} product={product}/>)
        }
        <p className="text-center fs-2 text-info">Total: {precioTotal()}</p>
        </>
    )
}







