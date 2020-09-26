import React from 'react';
import './Gallery';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import f1 from '../../../images/photos/1.jpg'
import f2 from '../../../images/photos/2.jpg'


function Gallery(){
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
          <div data-src={f1} />
          <div data-src={f2} />
        </AwesomeSlider>
      );
    return(
        <div className="gallery">
            <a name="gallery">
                <div className="window">
                    photo 1 - {slider}
                </div>
            </a>
        </div>
    )
}

export default Gallery;