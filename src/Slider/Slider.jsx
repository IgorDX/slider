import React, { useEffect, useState, useRef } from 'react';
import "./slider.css";

export const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(Math.ceil(document.documentElement.clientWidth / 3));
    const [slideHeight, setSlideHeight] = useState(Math.ceil((document.documentElement.clientWidth / 3) * 0.75)); // Пропорция 4:3
    const [containerWidth, setContainerWidth] = useState(Math.ceil(document.documentElement.clientWidth));
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            let newContainerWidth = Math.ceil(document.documentElement.clientWidth-500);
            let newSlidesToShow = 3;
    
            if (newContainerWidth <= 820){
                newSlidesToShow = 2;
                newContainerWidth += 250;   
            }
            if (newContainerWidth <= 500){
                newSlidesToShow = 1;
                newContainerWidth +=150;
            }
            
            setContainerWidth(newContainerWidth);
            setSlidesToShow(newSlidesToShow);
    
            // Рассчитываем высоту слайда
            const slideAspectRatio = 4 / 3; // Пропорция 4:3
            let newSlideHeight = Math.ceil((newContainerWidth / newSlidesToShow) / slideAspectRatio);
    
            setSlideHeight(newSlideHeight);
            setSlideWidth(Math.ceil(newSlideHeight * slideAspectRatio));
    
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    

    const handleSlideLeft = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? slides.length - slidesToShow : prevIndex - slidesToShow);
    };
    
    const handleSlideRight = () => { 
        setCurrentIndex(prevIndex => (prevIndex + slidesToShow) % slides.length);
    };

    return (
        <div className="slider">
            <div className='slider-container' ref={sliderContainerRef} style={{ width: `${containerWidth-20}px` }}>
                <button className='arrowHolder left-arrow' onClick={handleSlideLeft}><img src="images/leftArrow.svg" alt="" /></button>
                <div className='slider-line' style={{ transform: `translateX(-${currentIndex * slideWidth}px)`}}>
                    {slides.map((el, index) => (
                        <div key={index} className='slider-item'    >
                            <img src={el.image} alt="image" style={{ maxWidth: `${slideWidth-20}px`, height: `${slideHeight}px` }} />
                        </div>  
                    ))}
                </div>
                <button className='arrowHolder right-arrow' onClick={handleSlideRight}><img src="images/rightArrow.svg" alt="" /></button>
            </div>
        </div>
    );
};
