import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function Navbar(){

    const [cartOpen,setCartOpen] = useState(false);
    const products = useSelector(state=>state.cart.products);

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className='link' to='/'>Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to='/'>Clara Diaz</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <AccountBoxIcon />
                        <div className="cartIcon" onClick={(e)=> setCartOpen(!cartOpen)}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {cartOpen && <Cart />}
        </div>
    )
}
export default Navbar;