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
    FormDisplay
} from './elements'
import { useCartContext } from '../../context/CartContext'
import Button from '../Button'
import { Form } from '../Form'
import { createOrder } from '../../helpers/firebase'


export const Cart = () => {
    const [isShopping, setIsShopping] = useState(true)
    const [user, setUser] = useState({})
    const { cart, removeItem, cartLength, cartTotal } = useCartContext()
    
    const handleUser = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleIsShopping = () => {
        setIsShopping(!isShopping)
    }

    const handleRemove = (id) => {
        removeItem(id)
    }

    const handleOrder = event => {
        event.preventDefault()
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
        
        createOrder(order)
        .then(data => console.log(data.id))
        .finally(() => window.location.replace("/"))
    }

    let lenCart = cartLength()

    console.log(user);
    return (
        <CartContainer>
            {
                <CartDisplay>
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
                                            <Button text={'Finalizar Compra'} onAdd={()=>setIsShopping(false)}/>
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
                        :   
                            <FormDisplay>
                                <Form handleUser={handleUser} handleIsShopping={handleIsShopping} endShopping={handleOrder}/>
                            </FormDisplay>
                    }
                </CartDisplay>
            }
        </CartContainer>
    )
}