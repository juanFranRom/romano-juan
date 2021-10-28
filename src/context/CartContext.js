import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(window.sessionStorage.getItem('cart') ? JSON.parse(window.sessionStorage.getItem('cart')) : [])

    console.log(cart);

    const cartLength = () => cart.length

    const cartRealLength = () => cart.reduce((storage, item) => 
    {
        storage += item.quantity;
        return storage; 
    }, 0);

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

    useEffect(() => {
        if(cart.length > 0)
            window.sessionStorage.setItem('cart', JSON.stringify(cart))
        else if(window.sessionStorage.getItem('cart'))
            window.sessionStorage.removeItem('cart')
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            cartLength,
            clear,
            cartTotal,
            cartRealLength
        }}>
            { children }
        </CartContext.Provider>
    )
}
