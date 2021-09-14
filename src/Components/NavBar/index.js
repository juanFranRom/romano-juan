import {
    NavContainer,
    NavMenu,
    NavItem,
    NavBtn,
    Bars
} from './elements'
import Logo from '../Logo'
import Button from '../Button'
import Carrito from '../Carrito'


export default function NavBar({ handle }) {
    return (
        <NavContainer>
            <Logo/>
            <Bars onClick={ handle }/>
            <NavMenu>
                <NavItem>
                    <a href="/">Cortes</a>
                </NavItem>
                <NavItem>
                    <a href="/">Embutidos</a>
                </NavItem>
                <NavItem>
                    <a href="/node_modules">Elaborados</a>
                </NavItem>
            </NavMenu>
            <NavMenu>
                <NavBtn>
                    <Button text="Contactanos"/>
                </NavBtn>
                <NavItem>
                    <Carrito/>
                </NavItem>
            </NavMenu>
        </NavContainer>
    )
}
