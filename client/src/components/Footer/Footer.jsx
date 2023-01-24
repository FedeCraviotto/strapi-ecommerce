import React from "react";
import './footer.scss';
import paymentMethods from '../../assets/images/misc/payment.png';
function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Children</span>
                    <span>Accesories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Refunds</span>
                    <span>Cancellations</span>
                    <span>Stores</span>
                    <span>Jobs</span>
                </div>
                <div className="item">
                    <h3>About</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat recusandae, ratione aperiam eum ea suscipit ab quae tempora illo incidunt officia eaque veniam blanditiis nam dolore provident sint quam?</span>
                </div>
                <div className="item">
                    <h3>Contact</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat recusandae, ratione aperiam eum ea suscipit ab quae tempora illo incidunt officia eaque veniam blanditiis nam dolore provident sint quam?</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Clara Diaz</span>
                    <span className="copyright">® Copyright 2023. All rights reserved</span>
                </div>
                <div className="right">
                    <img src={paymentMethods} alt="payment methods" />
                </div>
            </div>
        </div>
    )
}
export default Footer;