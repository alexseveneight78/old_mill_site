import React from 'react';
import './Gallery.css';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import f1 from '../../../images/photos/1.jpg'
import f2 from '../../../images/photos/2.jpg'

const fadeImages = [f1,f2];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }
function Gallery(){
    return(
        <div className="gallery">
            <a name="gallery">
                <Slideshow />
            </a>
        </div>
    )
}

export default Gallery;