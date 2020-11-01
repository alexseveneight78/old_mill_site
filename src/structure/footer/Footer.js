import React from 'react';
import './Footer.css';
import personal_logo from '../images/78logo_small.svg'

function Footer(){
    return (
        <footer>
            <div className="creator">
                <div>Created by:</div><a href="https://github.com/alexseveneight78" target="_blank" rel="noopener noreferrer">
                    <img src={personal_logo} alt="personal_logo"></img>
                </a>
            </div>
            <div className="wish">
                <h2>Кафе «Старая мельница»: «Мы сделаем Ваш отдых душевным и веселым!»</h2>
            </div>
            <div className="direct_contact">
                Контактные данные: <a href="tel:+375293771122">Анатолий</a>
            </div>
        </footer>
    )
}

export default Footer;