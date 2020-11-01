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
import img15 from '../../../images/photos/15.jpg';
import img16 from '../../../images/photos/16.jpg';
import img17 from '../../../images/photos/17.jpg';
import img18 from '../../../images/photos/18.jpg';
import img19 from '../../../images/photos/19.jpg';
import img20 from '../../../images/photos/20.jpg';
import img21 from '../../../images/photos/21.jpg';
import img22 from '../../../images/photos/22.jpg';


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper"><a name="gallery"></a>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img1} alt="image1" />
                </div>
                <div>
                    <img src={img2} alt="image2" />
                </div>
                <div>
                    <img src={img3} alt="image3" />
                </div>
                <div>
                    <img src={img4} alt="image4" />
                </div>
                <div>
                    <img src={img5} alt="image5" />
                </div>
                <div>
                    <img src={img6} alt="image6" />
                </div>
                <div>
                    <img src={img7} alt="image7" />
                </div>
                <div>
                    <img src={img8} alt="image8" />
                </div>
                <div>
                    <img src={img9} alt="image9" />
                </div>
                <div>
                    <img src={img10} alt="image10" />
                </div>
                <div>
                    <img src={img11} alt="image11" />
                </div>
                <div>
                    <img src={img12} alt="image12" />
                </div>
                <div>
                    <img src={img13} alt="image13" />
                </div>
                <div>
                    <img src={img14} alt="image14" />
                </div>
                <div>
                    <img src={img15} alt="image15" />
                </div>
                <div>
                    <img src={img16} alt="image16" />
                </div>
                <div>
                    <img src={img17} alt="image17" />
                </div>
                <div>
                    <img src={img18} alt="image18" />
                </div>
                <div>
                    <img src={img19} alt="image19" />
                </div>
                <div>
                    <img src={img20} alt="image20" />
                </div>
                <div>
                    <img src={img21} alt="image21" />
                </div>
                <div>
                    <img src={img22} alt="image22" />
                </div>
            </Carousel>
        </div>
    );
}
