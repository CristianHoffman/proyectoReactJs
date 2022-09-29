import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Productos } from "../../assets/Productos";

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const {productId} = useParams();
    useEffect(() =>{
        const getData = new Promise(res =>{
            setTimeout(() =>{
                res(Productos);
            },200);
        });
        getData.then(res => setDetalleProducto(res.find(prod => prod.id === parseInt(productId) )))
     }, [])

 
   
    return (
    <>
    <ItemDetail item={detalleProducto}/>
    </>
)
}

export default ItemDetailContainer