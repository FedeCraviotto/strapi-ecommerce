import React from "react";
import './products.scss'
import coverImg from '../../assets/images/misc/cover.jpg';
import List from '../../components/List/List';
import { useParams } from "react-router-dom";
import { useState } from "react";
function Products(){

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Shirts</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Purses</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Jeans</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Dresses</label>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={10} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setSort('asc')} />
              <label htmlFor="asc">Price -</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setSort('desc')} />
              <label htmlFor="asc">Price +</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="catImg" src={coverImg} alt="" />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    );
}
export default Products;