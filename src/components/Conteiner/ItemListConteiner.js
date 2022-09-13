import React, {useState, useEffect} from "react";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { Productos } from "../../assets/Productos";

const ItemListContainer = ({greeting}) =>{

    const promesaItem = (products) =>{
        return new Promise ((res, rej) =>{
            setTimeout(() => {
                res(products)

            },2000)
        })
    };

    const [listProducs, setListProducts] = useState([]) 
    useEffect(() =>{
    promesaItem(Productos)
    .then(res => setListProducts(res))
    }, [])
    // console.log(listProducs)


    // const onAdd = (cantidad) => {
    //     console.log(`Compraste ${cantidad} unidades`);
    //   };
    return (
        <>
        <h2>{greeting}</h2>
        <ItemList listProducts={listProducs}/>
        
        {/* <ItemCount inicio={1} stock={10} onAdd={onAdd}/> */}
        </>
    )
}

export default ItemListContainer