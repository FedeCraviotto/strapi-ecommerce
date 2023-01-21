import React from "react";
import FeaturedProducts from "../../components/Featured/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import './home.scss';
function Home(){
    return(
        <div className="home">
            <Slider />
            <FeaturedProducts type='Featured'/>
            <FeaturedProducts type='Trending'/>
        </div>
    )
}
export default Home;