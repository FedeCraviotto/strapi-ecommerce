import React from "react";
import { useState } from "react";
import './product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product(){
  const dispatch = useDispatch();
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(1);
    const {data, loading} = useFetch(`/products/${id}?populate=*`
    );
    return (
      <div className="product">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    process.env.REACT_APP_UPLOADS +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOADS +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOADS +
                    data?.attributes?.img3?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img3")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOADS +
                    data?.attributes?.img4?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img4")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOADS +
                    data?.attributes?.[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h2>{data?.attributes?.title || 'Item title'}</h2>
              <span className="price">$400</span>
              <p>
              {data?.attributes?.description || 'Item description'}
              </p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((previous) =>
                      previous === 1 ? 1 : previous - 1
                    )
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((previous) => previous + 1)}>
                  +
                </button>
              </div>
              <button className="add" onClick={()=> dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                description: data.attributes.description,
                price: data.attributes.price,
                // * data.attributes.discount
                img: data.attributes.img.data.attributes.url,
                quantity

              }))} >
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
                <span>Brand: Kos</span>
                <span>Category: {data?.attributes?.sub_categories.data.map((category)=> category.attributes.title) || 'Item categories'}</span>
                <span>Tags: Dress, Women, White</span>
              </div>
              <hr />
              <div className="info">
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>REFUNDS</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div>
    );
}
export default Product;