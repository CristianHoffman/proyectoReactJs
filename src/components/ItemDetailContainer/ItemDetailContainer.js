import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) 
    useEffect(() =>{
    fetch('https://fakestoreapi.com/products/3')
    .then(res=>res.json())
    .then(json => setProduct(json))
    }, [])
   
   
    return (
    <>
    <ItemDetail item={product}/>
    </>
)
}

export default ItemDetailContainer