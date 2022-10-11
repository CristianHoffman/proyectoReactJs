import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({});
    const {productId} = useParams();
    useEffect(() =>{
         const queryDoc = doc(db, 'products', productId);
         getDoc(queryDoc)
         .then(res => setDetalleProducto({id: res.id, ...res.data() }))
    }, [])

 
   
    return (
    <>
    <ItemDetail item={detalleProducto}/>
    </>
    )
}

export default ItemDetailContainer;