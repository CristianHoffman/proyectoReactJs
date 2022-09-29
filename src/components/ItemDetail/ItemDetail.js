import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

 const [irCarrito, setIrCarrito] = useState(false)
    
  
  const onAdd = (cantidad) => {
        setIrCarrito(true)
      };
    return (
       
     <div className="producto text-center">
        
        <h3>{item.product}</h3>
        <p className="fs-3">{item.description}</p>
        <p className="fw-bold">${item.price}</p>
        <img src={item.image}/>
        {
          irCarrito 
          ? <Link to={"/Cart"}><button className="btn btn-success">Ir al carrito</button></Link>
          : <ItemCount inicio={1} stock={10} onAdd={onAdd}/>
        }
     </div>
    )

}

export default ItemDetail
