import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where} from "firebase/firestore";


const ItemListContainer = ({greeting}) =>{
    let { categoriaId } = useParams();
    const [listProducs, setListProducts] = useState([])
    
    
    useEffect(() =>{
        const queryCollection = collection(db, 'products')
       
    
    if(categoriaId) {
        const queryFilter = query(queryCollection, where("categoria", "==", categoriaId))
        getDocs(queryFilter)
        .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
    
       
        
    } else {
        getDocs(queryCollection)
        .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
       
        
    }
 }, [categoriaId])




    return (
        <>
        <h2 className="text-center pt-4 fs-2">{greeting}</h2>
        <ItemList listProducts={listProducs}/>
       </>
    )
}

export default ItemListContainer