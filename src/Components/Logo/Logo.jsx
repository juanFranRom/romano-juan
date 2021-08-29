import React from 'react'
import LogoImg from '../../Images/Logo.png'
import './Styles.css'

export default function Logo() {
    return (
        <div className="logo">
            <img src={LogoImg} alt="LOGO"/>
            <p>A Rolette</p>
        </div>
    )
}
