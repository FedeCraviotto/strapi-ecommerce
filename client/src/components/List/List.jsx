import React from "react";
import './list.scss';
import Card from '../Card/Card';
function List(){

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
        {
            id: 5,
            img:'/featured/1.jpg',
            img2: '/featured/1b.jpg',
            title: 'Vestido blanco',
            isNew: false,
            price: 20,
            discount: 0.85
        },
        {
            id: 6,
            img:'/featured/2.jpg',
            img2: '/featured/2b.jpg',
            title: 'Short',
            isNew: false,
            price: 12,
            discount: 0.90
        },
        {
            id: 7,
            img:'/featured/3.jpg',
            img2: '/featured/3b.jpg',
            title: 'Musculosa',
            isNew: true,
            price: 15,
            discount: 0.70
        },
        {
            id: 8,
            img:'/featured/4.jpg',
            img2: '/featured/4b.jpg',
            title: 'Musculosa negra',
            isNew: true,
            price: 14,
            discount: 0.80
        },
    ]
    return(
        <div className="cardList">
            {data?.map((item)=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}
export default List;