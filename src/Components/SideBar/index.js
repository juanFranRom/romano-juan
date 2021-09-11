import {
    SideBarContainer,
    SideBarMenu,
    SideBarItem,
    Cruz
} from './elements'

export default function SideBar({ value, handle }) {
    return (
        <SideBarContainer className={ value ? "active" : ""} onClick={ handle }>
            <Cruz onClick={ handle } />
            <SideBarMenu>
                <SideBarItem onClick={ handle }>
                    Cortes
                </SideBarItem>
                <SideBarItem onClick={ handle }>
                    Embutidos
                </SideBarItem>
                <SideBarItem onClick={ handle }>
                    Elaborados
                </SideBarItem>
                <SideBarItem onClick={ handle }>
                    Contactanos
                </SideBarItem>
                <SideBarItem onClick={ handle }>
                    Mi carrito
                </SideBarItem>
            </SideBarMenu>
        </SideBarContainer>
    )
}
