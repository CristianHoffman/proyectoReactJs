import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
      };
    return (
       
     <div className="producto text-center">
        
        <h3>{item.product}</h3>
        <p className="fs-3">{item.description}</p>
        <p className="fw-bold">${item.price}</p>
        <img src={item.image}/>
        <ItemCount inicio={1} stock={10} onAdd={onAdd}/>
     </div>
    )

}

export default ItemDetail
