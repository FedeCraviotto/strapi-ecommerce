import React from "react";
import './products.scss'
import coverImg from '../../assets/images/misc/cover.jpg';
import List from '../../components/List/List';
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from '../../hooks/useFetch.js';
function Products(){

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);

    const {data, loading, error} = useFetch(`sub-categories/?[filters][categories][id][$eq]=${catId}`);

    function handleChange(e){
      const value = e.target.value;
      const isChecked = e.target.checked;
      setSelectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter((item)=> item!== value));
    }
    

    return (
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {error
              ? "Something went wrong"
              : loading
              ? "loading "
              : data.map((item) => (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item?.attributes?.title}</label>
                  </div>
                ))}
          </div>
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={10}
                max={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="asc">Price +</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price -</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="catImg" src={coverImg} alt="" />
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            selectedSubCategories={selectedSubCategories}
          />
        </div>
      </div>
    );
}
export default Products;