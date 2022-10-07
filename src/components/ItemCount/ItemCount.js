import React, {useState} from "react";
import "./ItemCount.css"




const ItemCount = ({inicio, stock, onAdd}) =>{
    
    const [carrito, setCarrito] = useState(inicio);

  const agregarCarrito = () =>{
      setCarrito(carrito  + 1)
}

 const quitarCarrito = () =>{
    setCarrito(carrito - 1)
 }
return (
    <div className="contador">
    
    <h2>{carrito}</h2>
    <button type="button" className="btn btn-dark m-1" disabled={carrito >= stock} onClick={agregarCarrito}>+</button>
    <button type="button" className="btn btn-dark m-1" disabled={carrito <= inicio} onClick={quitarCarrito}>-</button>
       <div>
        <button type="button" className="btn btn-success" onClick={() =>onAdd(carrito)}>Agregar al carrito</button>
       </div>
       
    </div>
)

}

export default ItemCount