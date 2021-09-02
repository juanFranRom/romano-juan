import { LogoWrapper } from './Elements'

export default function Logo() {
    return (
        <LogoWrapper>
            <img src="assets/Images/Logo.png" alt="LOGO"/>
            <p>Carnes a <span className="marca">Rolette</span></p>
        </LogoWrapper>
    )
}
