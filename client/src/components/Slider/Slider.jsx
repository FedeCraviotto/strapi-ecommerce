import React, { useState } from 'react';
import './slider.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider(){
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        './slider/slider01.png',
        './slider/slider02.jpg',
        './slider/slider03.jpg'
    ];

    const previousSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : (previous) => previous - 1)
    }
    const nextSlide = ()=> {
        setCurrentSlide(currentSlide === 2 ? 0 : (previous) => previous + 1)
    }

    return(
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider;