import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="Footer">
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer