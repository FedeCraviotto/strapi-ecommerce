import React from "react";
import './contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Contact(){
    return(
        <div className="contact">
            <div className="wrapper">
                <div className="text">
                    <span>Get in touch</span>
                </div>
                <div className="mail">
                    <input type="text" placeholder="enter your email"/>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
                </div>
            </div>
        </div>
    )
};
export default Contact;