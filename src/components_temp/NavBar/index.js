import {
    NavContainer,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    Bars
} from './elements'
import Logo from '../Logo'
import Button from '../Button'
import Carrito from '../Carrito'


export default function NavBar({ handle }) {
    return (
        <NavContainer>
            <NavLink to="/">
                <Logo/>
            </NavLink>
            <Bars onClick={ handle }/>
            <NavMenu>
                <NavItem>
                    <NavLink to="/category/cortes">
                        Cortes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/category/achuras-embutidos">
                        Achuras y Embutidos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/category/elaborados">
                        Elaborados
                    </NavLink>
                </NavItem>
            </NavMenu>
            <NavMenu>
                <NavLink to='/'>
                    <NavBtn>
                        <Button text="Contactanos"/>
                    </NavBtn>
                </NavLink>
                <NavItem>
                    <NavLink to="/cart">
                        <Carrito/>
                    </NavLink>
                </NavItem>
            </NavMenu>
        </NavContainer>
    )
}
