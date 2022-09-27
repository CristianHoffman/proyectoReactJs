import React, {useState, useEffect} from "react";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { Productos } from "../../assets/Productos";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const ItemListContainer = ({greeting}) =>{
    let { categoriaId } = useParams();
    const [listProducs, setListProducts] = useState([]) 
    
    useEffect(() =>{
    const promesaItem = new Promise(res =>{
        setTimeout(() =>{
            res(Productos);
        },2000);
    });
    if(categoriaId) {
        promesaItem.then(res => setListProducts(res.filter(prod => prod.categoria === categoriaId)))
    } else {
        promesaItem.then(res =>setListProducts(res))
    }
 }, [categoriaId])




    return (
        <>
        <h2>{greeting}</h2>
        <ItemList listProducts={listProducs}/>
        <BounceLoader color="#7c36d6" />
        
        </>
    )
}

export default ItemListContainer