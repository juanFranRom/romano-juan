import styled from "styled-components"
import { ImCross as Cross } from 'react-icons/im'

export const CartContainer = styled.div`
    padding-top: 90px;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const CartDisplay = styled.div`
    width: 80%;
    height: fit-content;
    min-height: 90%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
    padding: 0 5%;
`

export const CartHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 3% 0;
`

export const CartItem = styled(CartHeader)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Item = styled.div`
    display: flex;

    & img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        margin-right: 10px;
    }
`

export const Precio = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 24px;
`

export const Eliminar = styled(Cross)`
    font-size: 1rem;
    color: red;
    align-self: flex-end;
    margin-bottom: 50px;
    margin-right: 10px;
    cursor: pointer;
`
