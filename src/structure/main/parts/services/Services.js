import React from 'react';
import './Services.css';

function Services(){
    return(
        <div className="services">
            <h3>
                <a name="services">Наши услуги</a>
            </h3>
                Мы с удовольствием предлагаем Вашему вниманию следующие услуги:
                <ul>
                    <li>Горячие обеды.</li>
                    <li>Проведение банкетов, дней рождения, свадеб и т.д.</li>
                    <li>Бар.</li>
                    <li>Выездные мероприятия.</li>
                    <li>Заблаговременное согласование меню для будущего мероприятия.</li>
                    <li>Доставка обедов в офисы.</li>
                </ul>
                <div className="line"></div>
        </div>
    )
}

export default Services