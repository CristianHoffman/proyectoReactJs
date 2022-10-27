import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../Context/CartContext';


const CartWidget = () => {
const {productoTotal} = useCartContext()

    return (
        <div>
        
        <ShoppingCartIcon color="secondary"/>
        <span>{productoTotal() || ''}</span>

        </div>
        
    )
}
export default CartWidget