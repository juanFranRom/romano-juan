import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Logo from '../../Components/Logo/Logo'
import './styles.css'

export default function Header() {
    return (
        <div className="header">
            <Logo/>
            <NavBar/>
            <a href="#"><button>Contactanos</button></a>
        </div>
    )
}
