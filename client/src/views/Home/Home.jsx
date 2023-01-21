import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/Featured/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import './home.scss';
function Home(){
    return(
        <div className="home">
            <Slider />
            <FeaturedProducts type='Featured'/>
            <Categories />
            <FeaturedProducts type='Trending'/>
            <Contact />
        </div>
    )
}
export default Home;