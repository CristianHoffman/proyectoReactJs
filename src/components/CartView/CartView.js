import { useCartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { db } from "../firebase/firebase"
import {collection } from "firebase/firestore"
import { addDoc } from "firebase/firestore"
import "../CartView/CartView.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartView = () =>{
 const {carrito, precioTotal} = useCartContext()
 

 const order = {
    buyer: {
        name: "Cristian",
        email: "asd@gmail.com",
        telefono: "114142",
        direccion: "as123"
    },
    item: carrito.map(product => ({ id: product.id, title: product.product, price: product.price, quantity: product.quantity})),
    total: precioTotal(),
 }
    
 const handlerClick = () => {
    const orderCollection = collection(db, "ventas");
    addDoc(orderCollection, order)
    .then(({id}) =>console.log(id))
    toast('Tu compra ha sido realizada con exito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 }
    if(carrito.length === 0){
        return (
            <>
            <p className="text-center fs-3 pt-5">Aun no agregaste nada al carrito.</p>
            <Link to={"/"}><p className="text-center text-success fs-4">Volver a comprar</p></Link>
            </>
        )
    }

    return(
        <>
        {
            carrito.map(product => <CartItem key={product.id} product={product}/>)
        }
        <div className="contenedor-comprar">
        <p className="text-center fs-2 text-info">Total: {precioTotal()}</p>

        <button onClick={handlerClick} className="btn btn-success">Comprar</button>
        </div>
        <ToastContainer/>
        </>
    )
}







