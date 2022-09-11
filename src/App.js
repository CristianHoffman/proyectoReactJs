import React from "react";
import Navbar from "./components/Header/Header"
import ItemListContainer from "./components/Header/Conteiner/ItemListConteiner";
import "bootstrap/dist/css/bootstrap.min.css"



const nombre = 'cristian'
const apellido = 'Hoffman'

const App = () => {
  return (
    <>
    <Navbar nombre={nombre} apellido={apellido}/>

    <ItemListContainer greeting= "Aca iran los productos :)"/>

  
    </>
    
    )
  }

export default App
 
