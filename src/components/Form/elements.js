import styled from "styled-components";

export const FormWrapper = styled.form`
    padding: 30px;
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    color: rgb(139,39,39);

    @media screen and (max-width: 560px){
        & h1{
            font-size: 24px;
        }

        & h2{
            font-size: 16px;
        }
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    font-weight: 600;
    -moz-appearance: textfield;

    & input{
        width: 300px;
        padding: 5px;
        margin: 10px 0;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type=number]{
            -moz-appearance: textfield;
        }
    }
`

export const SubmitWrapper = styled.div`
    width: 250px;
`
export const CancelWrapper = styled.div`
    width: 250px;
`
export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`