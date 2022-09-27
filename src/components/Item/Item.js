import "../Item/Item"
import "../Item/Item.css"
import { Link } from "react-router-dom"



const Item = ({product}) =>{
    console.log(product)
    return (
        <div className="productos text-center">
        <h2>{product.product}</h2>
        <p className="fs-3">{product.description}</p>
        <p className="fw-bold">$ {product.price}</p>
        <img src={product.image}/>
        <Link to={`/product/${product.id}`}> <button className="boton">Ver mas</button></Link>
        
        </div>
    )
}

export default Item