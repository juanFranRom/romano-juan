import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const isInCart = (id) => {
        let isIn = -1

        cart.forEach(( i, index ) => {
            if( i.item.id === id )
                isIn = index;
        })

        return isIn
    }

    const addItem = ( item, quantity ) => {
        let pos = isInCart(item.id)

        if(pos === -1)
            setCart([...cart, {
                item:  item,
                quantity: quantity
            }])
        else
            setCart(cart.map(( i, index ) => {
                if(index !== pos) 
                    return i
                else{
                    return {
                        item: i.item,
                        quantity: i.quantity + quantity
                    }
                }
            }))
    }

    const removeItem = ( id ) => {
        let newArray = cart.filter(({item, quantity}) => item.id !== id) 
        setCart(newArray)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear
        }}>
            { children }
        </CartContext.Provider>
    )
}
