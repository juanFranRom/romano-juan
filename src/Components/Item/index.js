import { useState, useEffect } from 'react'
import { 
    CountWrapper, 
    CountDisplay, 
    Substract, 
    Plus
} from './elements'
import { IconContext } from 'react-icons'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage'

export default function Item({ item, initial = 1, onAdd }) {
    const [count, setCount] = useState({
        value: initial,
        error: false
    })

    if(initial > item.stock)
        setCount(0)

    const sum = () => {
        count.value < item.stock
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

    useEffect(() => {
        setTimeout(() => {
            setCount(
                {
                    ...count,
                    error: false
                }
            )
        }, 3000);
    }, [count.error])

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
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name}/>
                <CountDisplay>
                    <Substract onClick={ substract } />
                    <input value={ count.value } readOnly/>
                    <Plus onClick={ sum } />
                </CountDisplay>
                {
                    count.error && <ErrorMessage text="No hay suficiente stock"/>
                }
                <Button text="Agregar al Carrito" onAdd={() => onAdd(count.value, item.name)}/>
            </CountWrapper>
        </IconContext.Provider>
        
    )
}
