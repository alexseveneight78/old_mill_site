import React from 'react';
import './Main.css';
import About from './parts/about/About'
import Services from './parts/services/Services'
import Carousel from './parts/gallery/Carousel';
import Contacts from './parts/contacts/Contacts'



function Main(){
    return (
        <main>
            <About />
            <Services />
            <Carousel />
            <Contacts />
        </main>
    )
}

export default Main;