import { useCartContext } from '../../context/CartContext'
import { 
    LogoCart,
    CartContainer,
    QuantityCart
} from './elements'

export default function Carrito() {
    const { cartLength } = useCartContext()
    let valor = cartLength()

    return (
        <>
            <CartContainer>
                <LogoCart/>
                <QuantityCart>{valor === 0 ? "" : valor}</QuantityCart>
            </CartContainer>
        </>
    )
}
