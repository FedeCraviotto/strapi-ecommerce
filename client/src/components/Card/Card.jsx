import React from "react";
import {Link} from 'react-router-dom';
import './card.scss';

function Card({item}){
    return(
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img src={process.env.REACT_APP_UPLOADS + item?.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
                    <img src={process.env.REACT_APP_UPLOADS + item?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item?.attributes.price}</h3>
                    <h3>${(item?.attributes.price * item?.attributes.discount).toFixed(2)}</h3>
                </div>
            </div>
        </Link>
    )
};
export default Card;