import React, { useState } from 'react'
import "./slider2.css";
export const Slider2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselStyles = ()=> ({
        transform: `translateX(${currentIndex * -1200}px)`
    })  ;
    
  return (
    <div className='wrapper'>
        <div className="carousel" style={carouselStyles()}>
            <img src="images/img1.jpg" alt="cat"/>
            <img src="images/cat2.jpg" alt="cat"/>
            <img src="images/cat3.jpg" alt="cat"/>
            <img src="images/cat1.jpg" alt="cat"/>
            <img src="images/cat2.jpg" alt="cat"/>
            <img src="images/cat3.jpg" alt="cat"/>
        </div>
        <div onClick={()=> setCurrentIndex(prev=> prev+1)}>
            +
        </div>
        <div>-</div>
    </div>
  )
}
