import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import img1 from '../../../images/photos/1.jpg';
import img2 from '../../../images/photos/2.jpg';
import img3 from '../../../images/photos/3.jpg';
import img4 from '../../../images/photos/4.jpg';
import img5 from '../../../images/photos/5.jpg';
import img6 from '../../../images/photos/6.jpg';
import img7 from '../../../images/photos/7.jpg';
import img8 from '../../../images/photos/8.jpg';
import img9 from '../../../images/photos/9.jpg';
import img10 from '../../../images/photos/10.jpg';
import img11 from '../../../images/photos/11.jpg';
import img12 from '../../../images/photos/12.jpg';
import img13 from '../../../images/photos/13.jpg';
import img14 from '../../../images/photos/14.jpg';


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img1} alt="image" />
                </div>
                <div>
                    <img src={img2} alt="image" />
                </div>
                <div>
                    <img src={img3} alt="image" />
                </div>
                <div>
                    <img src={img4} alt="image" />
                </div>
                <div>
                    <img src={img5} alt="image" />
                </div>
                <div>
                    <img src={img6} alt="image" />
                </div>
                <div>
                    <img src={img7} alt="image" />
                </div>
                <div>
                    <img src={img8} alt="image" />
                </div>
                <div>
                    <img src={img9} alt="image" />
                </div>
                <div>
                    <img src={img10} alt="image" />
                </div>
                <div>
                    <img src={img11} alt="image" />
                </div>
                <div>
                    <img src={img12} alt="image" />
                </div>
                <div>
                    <img src={img13} alt="image" />
                </div>
                <div>
                    <img src={img14} alt="image" />
                </div>
            </Carousel>
        </div>
    );
}
