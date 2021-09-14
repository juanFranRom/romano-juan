import { useState } from 'react'
import{
    CountWrapper,
    CountDisplay,
    Substract,
    Plus
} from './elements'
import ErrorMessage from '../ErrorMessage'
import Button from '../Button'

const Count = ({ item, initial = 1}) => {
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

    const substract = () => {
        count > 0 
        && 
        setCount(count - 1)
    }

    if(error === true)
        setTimeout(() => {
            setError(false)
        }, 3000)

    return (
        <CountWrapper>
            <CountDisplay>
                <Substract onClick={ substract } />
                <input value={ count } readOnly/>
                <Plus onClick={ sum } />
            </CountDisplay>
            {
                error && <ErrorMessage text="No hay suficiente stock"/>
            }
            <Button text="Agregar al Carrito" onAdd={(count, item) => alert(`¡Se agrego ${count} ${item} a su carrito!`)}/>
        </CountWrapper>
    )
}

export default Count
