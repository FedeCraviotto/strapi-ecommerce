import React from 'react';
import './cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux';
import { convertLength } from '@mui/material/styles/cssUtils';
import {loadStripe} from '@stripe/stripe-js';
import makeRequest from '../../makeRequest.js';


function Cart(){
    const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
    const dispatch  = useDispatch()
    const products = useSelector(state=>state.cart.products);
    const totalPrice = ()=>{
        let total = products.reduce((acum, item) => (acum += item.price * item.quantity),0);
        return total.toFixed(2);
    }

    async function handlePayment(){
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders', {products});
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
            //Recordar habilitar el 'create' desde Settings>API Tokens, logeado al admin de Strapi
        } catch (error) {
            convertLength(error);
        }
    }

    return(
        <div className="cart">
            <h2>Products in your cart</h2>
            {products?.map((item)=>(
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOADS + item.img} alt="" />
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.description?.substring(0, 50)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment} >CHECKOUT</button>
            <span className="reset" onClick={()=>dispatch(resetCart())}>Clear cart</span>
        </div>
    );
};
export default Cart;