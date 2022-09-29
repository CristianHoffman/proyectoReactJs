import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { Productos } from "../../assets/Productos";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";


const ItemListContainer = ({greeting}) =>{
    let { categoriaId } = useParams();
    const [listProducs, setListProducts] = useState([])
    const [cargando, setCargando] = useState({})
    
    useEffect(() =>{
    const promesaItem = new Promise(res =>{
        setTimeout(() =>{
            res(Productos);
            setCargando(false)
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
        <h2 className="text-center pt-4 fs-2">{greeting}</h2>
        {
            cargando
            ? <BounceLoader color="#7c36d6" />
            : <ItemList listProducts={listProducs}/>
        }
    </>
    )
}

export default ItemListContainer