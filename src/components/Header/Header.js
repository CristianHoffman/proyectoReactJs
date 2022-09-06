import logo from "../../img/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Estilo.css"


const Header = () => {
    return (
        // <header>
        //    <img src={logo} class="logo" alt="logo"/>
        //    <h1>Napoles</h1>
        //    <nav>
        //      <a href="">Home</a>
        //      <a href="">Productos</a>
        //    </nav>
        //    <ShoppingCartIcon color="secondary"/>
          
        // </header>

        <header>
          <div class="logo">
           <img src={logo} class="logo-img" alt="logo"/>
           <h1 class= "logo-nombre">Napoles</h1>
          </div>
          <nav>
           <a href="">Home</a>
           <a href="">Productos</a>
          </nav>
         <ShoppingCartIcon color="secondary"/>
        </header>
    )
}
export default Header