import { LogoContainer } from "./elements"
import imagen from '../../assets/Images/Logo.png'

export default function Logo() {
    return (
        <LogoContainer>
            <img src={ imagen } alt="LOGO"/>
            <p>Carnes a <span>Rolette</span></p>
        </LogoContainer>
    )
}
