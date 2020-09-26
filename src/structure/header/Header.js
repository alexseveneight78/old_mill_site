import React from 'react';
import './Header.css';
import logo from '../images/mill-icon.svg'

function Header(){
    return (
        <header>
            <div className="header_one">
                <a href="/">
                    <img src={logo}></img>
                </a>
            </div>
            <div className="header_two">
                <a href="/">
                    Старая Мельница
                </a>
            </div>
            <div className="header_three">
                <ul>
                    <li>
                        <a href="#">Главная/О нас</a>
                    </li>
                    <li>
                        <a href="#">Меню/Услуги</a>
                    </li>
                    <li>
                        <a href="#">Галерея</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;