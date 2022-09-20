import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({item}) => {
    return (
       
     <div className="producto text-center">
        <h3>{item.title}</h3>
        <p className="fs-3">{item.description}</p>
        <p className="fw-bold">${item.price}</p>
        <img src={item.image}/>
        <ItemCount/>
     </div>
    )

}

export default ItemDetail
