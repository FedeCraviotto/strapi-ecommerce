import React from "react";
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import flagIcon from '../../assets/images/misc/en.png';
import paymentMethods from '../../assets/images/misc/payment.png';
import './navbar.scss';

function Navbar(){
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={flagIcon} alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link to='/'>Lara Diaz</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to='/'>Homepage</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <AccountBoxIcon />
                        <div className="cartIcon">
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;