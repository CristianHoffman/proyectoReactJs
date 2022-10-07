import { useCartContext } from "../Context/CartContext"
import "./CartItem.css"

const CartItem = ({product}) => {
const {removeItem}  = useCartContext()


    return (
        <div className="cartItem">
        <img src={product.image}/>
        
        <p className="pp fs-5">Producto: {product.product}</p>
        <p className="pp fs-5">Cantidad: {product.quantity}</p>
        <p className="pp fs-5">Precio unitario: $ {product.price}</p>
        <p className="pp fs-5">Subtotal: ${product.quantity * product.price}</p>
        
        <button className="btn btn-dark m-1 " onClick={() => removeItem(product.id)}>Eliminar Producto</button>
      </div>
    )
}

export default CartItem