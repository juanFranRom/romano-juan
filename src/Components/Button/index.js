import { ButtonContainer } from "./elements"

export default function Button({ text, onAdd }) {
    return (
        <ButtonContainer onClick={onAdd}>
            {text}
        </ButtonContainer>
    )
}
