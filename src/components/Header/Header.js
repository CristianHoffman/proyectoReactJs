import logo from "../../assets/img/logo.jpg"
import "./Estilo.css"
import CartWidget from "../Cart/CartWidget";



const Navbar = ({nombre, apellido}) => {
    const links = [
        {id: 1, nombre: "Botas"},
        {id: 2, nombre: "Zapatillas"},
        {id: 3, nombre: "Slides"}
    ]
  return (
        <header>
          <div className="logo">
           <img src={logo} className="logo-img" alt="logo"/>
           <h1 className= "logo-nombre">Napoles</h1>
          </div>
          <nav>
          {links.map ((link)=>{
            return  <a className="text-white" key={link.id} href="">{link.nombre}</a>
            
          })}
          </nav>
         <CartWidget/>
        </header>
    )
}
export default Navbar