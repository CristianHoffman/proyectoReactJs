import React from "react";
import Navbar from "./components/Header/Header"
import ItemListContainer from "../src/components/Conteiner/ItemListConteiner";
import "bootstrap/dist/css/bootstrap.min.css"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";


const greeting = "Bienvenidos a nuestra tienda"

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={greeting}/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={greeting}/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<CartView/>}/>
       
       
      </Routes>
    </BrowserRouter>

    </>
    
    )
  }

export default App
 
