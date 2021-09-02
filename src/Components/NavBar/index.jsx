import Logo from '../Logo'
import { Nav, NavItem, Bars, NavMenu, NavBtn } from './elements'
import Carrito from '../Carrito'

export default function NavBar() {
    return (
        <Nav>
            <NavItem>
                <Logo/>
            </NavItem>
            <Bars/>
            <NavMenu>
                <NavItem>
                    <a href="#">Cortes</a>
                </NavItem>
                <NavItem>
                    <a href="#">Embutidos</a>
                </NavItem>
                <NavItem>
                    <a href="#">Elaborados</a>
                </NavItem>
            </NavMenu>
            <NavItem>
                <NavBtn>
                    Contacnos
                </NavBtn>
                <Carrito/>
            </NavItem>
        </Nav>
    )
}
 