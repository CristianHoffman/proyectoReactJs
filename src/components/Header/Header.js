import logo from "../../img/logo.jpg"
import "./Estilo.css"
import CartWidget from "./Cart/CartWidget";



const Navbar = ({nombre, apellido}) => {
    const links = [
        {id: 1, nombre: "Home"},
        {id: 2, nombre: "Nosotros"},
        {id: 3, nombre: "Productos"}
    ]
  return (
        <header>
          <div class="logo">
           <img src={logo} class="logo-img" alt="logo"/>
           <h1 class= "logo-nombre">Napoles {apellido}</h1>
          </div>
          <nav>
          {links.map ((link)=>{
            return  <a key={link.id} href="">{link.nombre}</a>
            
          })}
          </nav>
         <CartWidget/>
        </header>
    )
}
export default Navbar