import logo from "../../assets/img/logo.jpg"
import "./Estilo.css"
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from "react-router-dom";



const Navbar = ({nombre, apellido}) => {
    const links = [
        {id: 1, nombre: "Botas", ruta: '/categoria/Botas'},
        {id: 2, nombre: "Zapatillas", ruta: '/categoria/Zapatillas'},
        {id: 3, nombre: "Slides", ruta: '/categoria/Slides'}
    ]
  return (
        <header>
          <div className="logo">
          <Link to={'/'}><img src={logo} className="logo-img" alt="logo"/> </Link>
           <Link to="/"><h1 className= "logo-nombre">Napoles</h1></Link>
           
          </div>
          <nav>
          {links.map ((link)=>{
            return  <Link className="text-white" key={link.id}  to={link.ruta}>{link.nombre}</Link>
            
          })}
          </nav>
         <Link to="/Cart"><CartWidget/></Link>
        </header>
    )
}
export default Navbar