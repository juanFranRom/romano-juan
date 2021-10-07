import { ButtonContainer } from "./elements"

export default function Button({ text, onAdd, type, color = 'yellow' }) {

    return (
        <ButtonContainer type={type} onClick={onAdd} color={color}>
            {text}
        </ButtonContainer>
    )
}
