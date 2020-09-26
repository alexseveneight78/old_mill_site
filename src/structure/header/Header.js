import React from 'react';
import './Header.css';
import logo from '../images/mill-icon.svg'

function Header(){
    return (
        <header>
            <div className="header_one">
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>
            <div className="header_two">
                <a href="/">
                    Кафе "Старая Мельница"
                </a>
            </div>
            <div className="header_three">
                <ul>
                    <li>
                        <a href="#about">О нас</a>
                    </li>
                    <li>
                        <a href="#services">Услуги</a>
                    </li>
                    <li>
                        <a href="#gallery">Галерея</a>
                    </li>
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;