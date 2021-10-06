import { LogoContainer } from "./elements"

export default function Logo() {
    return (
        <LogoContainer>
            <img src={`${process.env.PUBLIC_URL}/assets/Images/Logo.png`} alt="LOGO"/>
            <p>Carnes a <span>Rolette</span></p>
        </LogoContainer>
    )
}
