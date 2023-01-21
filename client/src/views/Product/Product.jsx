import React from "react";
import { useState } from "react";
import './product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

function Product(){

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const images = [
        '/singleProduct/1.jpg',
        '/singleProduct/1b.jpg',
        '/singleProduct/1c.jpg',
        '/singleProduct/1d.jpg'
    ]
    return (
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
            <img src={images[3]} alt="" onClick={(e) => setSelectedImg(3)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Item title</h2>
          <span className="price" >$400</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            rerum quo reiciendis totam accusamus necessitatibus, optio iure
            provident? Odio dolorum commodi facere qui eos voluptate sunt
            asperiores reprehenderit sapiente illum.
          </p>
          <div className="quantity">
            <button
              onClick={() =>
                setQuantity((previous) => (previous === 0 ? 0 : previous - 1))
              }
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((previous) => previous + 1)}>
              +
            </button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Kosiuko</span>
            <span>Dress</span>
            <span>Tags: Dress, Women, White</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    );
}
export default Product;