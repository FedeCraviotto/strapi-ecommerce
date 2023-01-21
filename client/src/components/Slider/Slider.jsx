import React from 'react';
import './slider.scss';
import slider01 from '../../assets/images/slider/slider01.png';
import slider02 from '../../assets/images/slider/slider02.png';
import slider03 from '../../assets/images/slider/slider03.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider(){
    return(
        <div className="slider">
            <div className="container">
                <img src={slider01} alt={slider01} />
                <img src={slider02} alt={slider02} />
                <img src={slider03} alt={slider03} />
            </div>
            <div className="icons">
                <div className="icon">
                    <ArrowBackIosNewIcon />
                </div>
                <div className="icon">
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider;