import React from 'react';
import './Contacts.css';

function Contacts(){
    return(
        <div className="contacts">
            <div className="contacts_person">
                <div>Контактные данные: <a href="tel:+375293771122">Анатолий</a>

                    <div>Телефон - <a href="tel:+375293771122">+375293771122</a></div>
                </div>
            </div>
            <div className="contacts_address">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.7677266526405!2d27.805280264025118!3d53.9901656716678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcb8b6f6b1d7b%3A0x8dfa8c205c69fd0e!2z0JrQsNGE0LUgItCh0YLQsNGA0LDRjyDQnNC10LvRjNC90LjRhtCwIg!5e0!3m2!1sru!2sby!4v1601149414557!5m2!1sru!2sby" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default Contacts;