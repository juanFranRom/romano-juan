import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    color: rgb(139,39,39);
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
    width: 50%;
`
export const CancelWrapper = styled.div`
    width: 50%;
`
export const ButtonsWrapper = styled.div`
    width: 500px;
    display: flex;
`