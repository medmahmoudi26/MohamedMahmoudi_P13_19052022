import React from 'react'
import './Nav.scss';
import logo from '../../assets/img/argentBankLogo.png';
import {Link} from 'react-router-dom'

export default function Nav() {

    return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
            </nav>
    )
}