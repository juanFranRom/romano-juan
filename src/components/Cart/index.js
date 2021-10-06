import {
    CartContainer,
    CartDisplay,
    CartItem,
    Item,
    Precio,
    Eliminar,
    SubmitContainer,
    EmptyCart,
    ButtonContainer,
    SubmitItem,
    ButtonLink
} from './elements'
import { useCartContext } from '../../context/CartContext'
import Button from '../Button'

export const Cart = () => {
    const { cart, removeItem, cartLength, cartTotal } = useCartContext()
    
    const handleRemove = (id) => {
        removeItem(id)
    }

    let lenCart = cartLength()

    return (
        <CartContainer>
            <CartDisplay>
            {
                lenCart > 0 
                ? 
                    <>
                        <CartItem>
                            <h1>Carrito ({lenCart})</h1>
                        </CartItem>
                            {
                                cart.map(({item, quantity}, index) => {
                                    return(
                                        <CartItem key={index}>
                                            <Item>
                                                <img src={`${process.env.PUBLIC_URL}/assets/Images/${item.image}`} alt={item.name}/>
                                                <div>
                                                    <h3>{item.name}</h3>
                                                    <p>{`${quantity} Kg`}</p>
                                                </div>
                                            </Item>
                                            <Precio>
                                                <Eliminar onClick={() => handleRemove(item.id)}/>
                                                {`${item.price * quantity} $`}
                                            </Precio>
                                        </CartItem>
                                    )
                                })
                            }
                        <SubmitItem>
                            <SubmitContainer>
                                <Precio>
                                    {`${cartTotal()} $`}
                                </Precio>
                                <Button text={'Finalizar Compra'} onAdd={()=>alert('Compra Realizada')}/>
                            </SubmitContainer>
                        </SubmitItem>
                    </>
                :
                    <EmptyCart>
                        <div>
                            <h1>¡Tu carrito esta vacio!</h1>
                            <p>¡Miles de productos te esperan!</p>
                        </div>
                        <ButtonContainer>
                            <ButtonLink to='/'>
                                <Button text={"Segui Comprando"}/>
                            </ButtonLink>
                        </ButtonContainer>
                    </EmptyCart>
            }
            </CartDisplay>
        </CartContainer>
    )
}