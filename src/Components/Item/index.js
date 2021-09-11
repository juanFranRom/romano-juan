import { useState } from 'react'
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
    const [count, setCount] = useState(initial)
    const [error, setError] = useState(false)

    if(initial > item.stock)
        setCount(0)

    const sum = () => {
        count < item.stock
        ?
            setCount(count + 1)
        :
            setError(true)
            
    }

    if(error === true)
        setTimeout(() => {
            setError(false)
        }, 3000)

    const substract = () => {
        count > 0 
        && 
        setCount(count - 1)
    }

    return (
        <IconContext.Provider value={{color: '#000'}}>
            <CountWrapper>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name}/>
                <CountDisplay>
                    <Substract onClick={ substract } />
                    <input value={ count } readOnly/>
                    <Plus onClick={ sum } />
                </CountDisplay>
                {
                    error && <ErrorMessage text="No hay suficiente stock"/>
                }
                <Button text="Agregar al Carrito" onAdd={() => onAdd(count, item.name)}/>
            </CountWrapper>
        </IconContext.Provider>
        
    )
}
