import { useState } from 'react'
import { CountWrapper, CountDisplay, Substract, Plus } from './elements'
import { IconContext } from 'react-icons'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage'

export default function ItemCount({ item, stock, initial = 1, onAdd }) {
    const [count, setCount] = useState({
        value: initial,
        error: false
    })

    if(initial > stock)
        setCount(0)

    const sum = () => {
        count.value < stock
        ?
            setCount({
                value: count.value + 1,
                error: false
            })
        :
            setCount({
                value: count.value,
                error: true
            })
            
    }

    const substract = () => {
        count.value > 0 
        && 
        setCount({
            value: count.value - 1,
            error: false
        })
    }

    return (
        <IconContext.Provider value={{color: '#000'}}>
            <CountWrapper>
                <h1>{item}</h1>
                <CountDisplay>
                    <Substract onClick={ substract } />
                    <input value={ count.value } readOnly/>
                    <Plus onClick={ sum } />
                </CountDisplay>
                {
                    count.error && <ErrorMessage text="No hay suficiente stock"/>
                }
                <Button text="Agregar al Carrito" onAdd={() => onAdd(count.value, item)}/>
            </CountWrapper>
        </IconContext.Provider>
        
    )
}
