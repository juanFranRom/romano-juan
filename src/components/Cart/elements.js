import styled from "styled-components"
import { ImCross as Cross } from 'react-icons/im'
import { Link } from "react-router-dom"

export const CartContainer = styled.div`
    padding: 120px 0 30px 0;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const CartDisplay = styled.div`
    min-height: 70vh;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
    padding: 0 5%;
`

export const CartItem = styled.div`
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 3% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SubmitItem = styled(CartItem)`
    border-bottom: none;
    justify-content: flex-end;
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

export const SubmitContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    & Button{
        align-self: flex-end;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgb(139,39,39);
    gap: 50px;
    height: 70vh;

    & p{
        font-size: 22px;
    }
`

export const ButtonContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonLink = styled(Link)`
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;

    &:hover{
        color: rgb(254,191,24, 1);
    }
`

export const FormDisplay = styled.div`
    min-height: 70vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
