import { useState } from 'react'
import {
    CartContainer,
    CartDisplay,
    CartHeader,
    CartItem,
    Item,
    Precio,
    Eliminar
} from './elements'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    const [renderizar, setRenderizar] = useState(false)
    const { cart, removeItem } = useCartContext()
    
    const handleRemove = (id) => {
        removeItem(id)
        setRenderizar(!renderizar)
    }

    return (
        <CartContainer>
            <CartDisplay>
                <CartHeader>
                    <h1>Carrito ({`${cart.length}`})</h1>
                </CartHeader>
                {
                    cart.map(({item, quantity}, index) => {
                        return(
                            <CartItem key={index}>
                                <Item>
                                    <img src={item.image} alt={item.name}/>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{`${quantity} Kg`}</p>
                                    </div>
                                </Item>
                                <Precio>
                                    <Eliminar onClick={() => handleRemove(item.id)}/>
                                    {`${item.price*quantity} $`}
                                </Precio>
                            </CartItem>
                        )
                    })
                }
            </CartDisplay>
        </CartContainer>
    )
}