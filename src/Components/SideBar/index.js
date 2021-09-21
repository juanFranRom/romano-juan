import {
    SideBarContainer,
    SideBarMenu,
    SideBarItem,
    Cruz,
    NavLink
} from './elements'

export default function SideBar({ value, handle }) {
    return (
        <SideBarContainer className={ value ? "active" : ""} onClick={ handle }>
            <Cruz onClick={ handle } />
            <SideBarMenu>
                <NavLink to="/category/cortes">
                    <SideBarItem onClick={ handle }>
                        Cortes
                    </SideBarItem>
                </NavLink>
                <NavLink to="/category/elaborados">
                    <SideBarItem onClick={ handle }>
                        Elaborados
                    </SideBarItem>
                </NavLink>
                <NavLink to="/category/achuras-embutidos">
                    <SideBarItem onClick={ handle }>
                        Achuras Y Embutido
                    </SideBarItem>
                </NavLink>
                <NavLink to='/'>
                    <SideBarItem onClick={ handle }>
                        Contactanos
                    </SideBarItem>
                </NavLink>
                <NavLink to="/cart">
                    <SideBarItem onClick={ handle }>
                        Mi Carrito
                    </SideBarItem>
                </NavLink>
            </SideBarMenu>
        </SideBarContainer>
    )
}
