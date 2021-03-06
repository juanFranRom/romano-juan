import { useState } from 'react'
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
    ButtonLink,
    FormDisplay,
    ItemDescription
} from './elements'
import { useCartContext } from '../../context/CartContext'
import Button from '../Button'
import Loading from '../Loading'
import { Form } from '../Form'
import { createOrder } from '../../helpers/firebase'


export const Cart = () => {
    const [idTicket, setIdTicket] = useState(null)
    const [loadingTicket, setLoadingTicket] = useState(false)
    const [isShopping, setIsShopping] = useState(true)
    const [user, setUser] = useState({})
    const { cart, removeItem, cartRealLength, cartTotal, clear } = useCartContext()
    

    const handleUser = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    /*const handleIsShopping = () => {
        setIsShopping(!isShopping)
    }*/

    const handleRemove = (id) => {
        removeItem(id)
    }

    const handleOrder = () => {
        const order = {
            buyer:{
                ...user
            },
            items: cart.map(item => {
                return {
                    id: item.item.id, 
                    name: item.item.name, 
                    price: item.item.price
                }
            }),
            total: cartTotal()
        }
        
        setLoadingTicket(true)

        createOrder(order)
        .then(data => {
            setIdTicket(data.id)
        })
        .finally(() => clear())
    }

    let lenCart = cartRealLength()

    return (
        <CartContainer>
            <CartDisplay>
            {
                !loadingTicket
                ?
                    <>
                        {
                            isShopping
                            ?
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
                                                                <ItemDescription>
                                                                    <div>
                                                                        <h3>{item.name}</h3>
                                                                        <p>{`${quantity} Kg`}</p>
                                                                    </div>
                                                                    <p>{`${item.price} $`}</p>
                                                                </ItemDescription>
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
                                                <Button text={'Finalizar Compra'} onAdd={()=>setIsShopping(false)}/>
                                            </SubmitContainer>
                                        </SubmitItem>
                                    </>
                                :
                                    <EmptyCart>
                                        <div>
                                            <h1>??Tu carrito est?? vac??o!</h1>
                                            <p>??Miles de productos te esperan!</p>
                                        </div>
                                        <ButtonContainer>
                                            <ButtonLink to='/'>
                                                <Button text={"Segu?? comprando"}/>
                                            </ButtonLink>
                                        </ButtonContainer>
                                    </EmptyCart>
                            :   
                                <FormDisplay>
                                    <Form handleUser={handleUser} endShopping={handleOrder}/>
                                </FormDisplay>
                        }
                    </>
                :
                    <>
                    {
                        !idTicket
                        ?
                            <Loading color={'rgb(139,39,39)'}/>
                        :
                        <EmptyCart>
                            <div>
                                <h1>??Ya ha finalizado de procesarse tu compra!</h1>
                                <p>Podr??s tener un seguimiento de la misma con tu ticket "{idTicket}"</p>
                            </div>
                            <ButtonContainer>
                                <ButtonLink to='/'>
                                    <Button text={"Volver al Inicio"}/>
                                </ButtonLink>
                            </ButtonContainer>
                        </EmptyCart>
                    }
                    </>
            }
            </CartDisplay>
        </CartContainer>
    )
}