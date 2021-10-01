import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const cartLength = () => cart.length

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

    const cartTotal = () => {
        let total = 0

        cart.forEach(product => {
            total += product.item.price * product.quantity
        })

        return total
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            cartLength,
            clear,
            cartTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}
