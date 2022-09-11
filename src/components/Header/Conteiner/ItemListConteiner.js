import ItemCount from "../ItemCount/ItemCount"



const ItemListContainer = ({greeting}) =>{
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
      };
    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount inicio={1} stock={10} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer