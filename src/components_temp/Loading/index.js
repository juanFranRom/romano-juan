import { useState, useEffect } from 'react'
import {
    LoadingContainer,
    DotContainer,
    Dot
} from './elements'

const Loading = ({ color = "rgb(0, 0, 0)" }) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setState(!state)
        }, 600)
        return () => {
            clearTimeout(timer)
        }
    }, [state])

    return (
        <LoadingContainer color={color}>
            <DotContainer>
                <Dot state={state} color={color}/>
                <Dot state={!state} color={color}/>
                <Dot state={state} color={color}/>
            </DotContainer>
            <p>Cargando...</p>
        </LoadingContainer>
    )
}

export default Loading
