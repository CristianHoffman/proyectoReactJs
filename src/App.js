import React from "react";
import Navbar from "./components/Header/Header"
import ItemListContainer from "../src/components/Conteiner/ItemListConteiner";
import "bootstrap/dist/css/bootstrap.min.css"

const greeting = "Bienvenidos a nuestra tienda"

const App = () => {
  return (
    <>
    <Navbar/>

    <ItemListContainer greeting={greeting}/>

  
    </>
    
    )
  }

export default App
 
