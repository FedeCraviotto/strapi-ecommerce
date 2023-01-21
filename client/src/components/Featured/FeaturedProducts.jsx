import React from 'react';
import Card from '../Card/Card';
import './featuredProducts.scss';

function FeaturedProducts({type}){

    const data = [
        {
            id: 1,
            img:'/featured/1.jpg',
            img2: '/featured/1b.jpg',
            title: 'Vestido blanco',
            isNew: false,
            price: 20,
            discount: 0.85
        },
        {
            id: 2,
            img:'/featured/2.jpg',
            img2: '/featured/2b.jpg',
            title: 'Short',
            isNew: false,
            price: 12,
            discount: 0.90
        },
        {
            id: 3,
            img:'/featured/3.jpg',
            img2: '/featured/3b.jpg',
            title: 'Musculosa',
            isNew: true,
            price: 15,
            discount: 0.70
        },
        {
            id: 4,
            img:'/featured/4.jpg',
            img2: '/featured/4b.jpg',
            title: 'Musculosa negra',
            isNew: true,
            price: 14,
            discount: 0.80
        },
    ]
    return(
        <div className="featuredProducts">
            <div className="top">
                <h3>{type} products</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus odit consectetur, dolore minus doloremque vitae placeat impedit iure praesentium, dignissimos, tenetur saepe. Beatae ipsa blanditiis consequuntur fuga nisi pariatur iste!</p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}
export default FeaturedProducts;