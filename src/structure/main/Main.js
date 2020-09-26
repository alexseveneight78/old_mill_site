import React from 'react';
import './Main.css';
import About from './parts/about/About'
import Services from './parts/services/Services'
import Gallery from './parts/gallery/Gallery'
import Contacts from './parts/contacts/Contacts'



function Main(){
    return (
        <main>
            <About />
            <Services />
            <Gallery />
            <Contacts />
        </main>
    )
}

export default Main;