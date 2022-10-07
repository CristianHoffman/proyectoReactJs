import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../Context/CartContext';


const CartWidget = () => {
const {productoTotal} = useCartContext()

    return (
        <div>
        <span className='text-light'>{productoTotal() || ''}</span>
        <ShoppingCartIcon color="secondary"/>
        </div>
        
    )
}
export default CartWidget