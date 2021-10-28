import { useState } from 'react'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage'
import {
    FormWrapper,
    InputWrapper,
    SubmitWrapper,
    ButtonLink,
    ButtonsWrapper
} from './elements'

export const Form = ({ handleUser, handleIsShopping, endShopping }) => {
    const [error, setError] = useState('')

    const handleChange = e => {
        handleUser(e)
        setError('')
    }

    const endForm = e => {
        e.preventDefault()

        let availableForSending = e.target[2].value === e.target[3].value
        
        if(availableForSending)
        {
            endShopping()
        }
        else
        {
            setError('Sus emails no coinciden.')
        }
    }

    return (
        <>
            <FormWrapper onChange={handleChange} onSubmit={endForm}>
                <h1>!Comparti tus datos con nosotros!</h1>
                <h2>Asi podremos garantizar la seguridad de tu pedido</h2>
                <InputWrapper>
                    Nombre:
                    <input type='text' name='name' required/>
                </InputWrapper>
                <InputWrapper>
                    Telefono:
                    <input type='number' name='tel' required/>
                </InputWrapper>
                <InputWrapper>
                    Email:
                    <input type='email' name='email' required/>
                </InputWrapper>
                <InputWrapper>
                    Confirma tu email:
                    <input type='email' name='email2' required/>
                </InputWrapper>
                <ErrorMessage text={error}/>
                <ButtonsWrapper>
                    <ButtonLink to={'/'}>
                        <Button type={'none'} text='Seguir Comprando' color={'red'} onAdd={handleIsShopping}/>
                    </ButtonLink>
                    <SubmitWrapper>
                        <Button type={'submit'} text='Finalizar Compra'/>
                    </SubmitWrapper>
                </ButtonsWrapper>
            </FormWrapper>
        </>
    )
}
