import Button from '../Button'
import {
    FormWrapper,
    InputWrapper,
    SubmitWrapper,
    CancelWrapper,
    ButtonsWrapper
} from './elements'

export const Form = ({ handleUser, handleIsShopping, endShopping }) => {

    return (
        <>
            <FormWrapper onChange={handleUser} onSubmit={endShopping}>
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
                <ButtonsWrapper>
                    <CancelWrapper>
                        <Button type={'none'} text='Seguir Comprando' color={'red'} onAdd={handleIsShopping}/>
                    </CancelWrapper>
                    <SubmitWrapper>
                        <Button type={'submit'} text='Finalizar Compra'/>
                    </SubmitWrapper>
                </ButtonsWrapper>
            </FormWrapper>
        </>
    )
}
