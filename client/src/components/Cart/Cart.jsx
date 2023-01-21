import React from 'react';
import './cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Cart(){
    const data = [
        {
            id: 1,
            img:'/featured/1.jpg',
            img2: '/featured/1b.jpg',
            title: 'Vestido blanco',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sunt amet magnam similique reprehenderit dicta, et expedita, voluptate pariatur autem ab unde, tenetur sequi excepturi commodi ad voluptas dolorem molestias.',
            isNew: false,
            price: 20,
            discount: 0.85
        },
        {
            id: 2,
            img:'/featured/2.jpg',
            img2: '/featured/2b.jpg',
            title: 'Short',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sunt amet magnam similique...',
            isNew: false,
            price: 12,
            discount: 0.90
        },
    ];

    return(
        <div className="cart">
            <h2>Products in your cart</h2>
            {data?.map((item)=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.description?.substring(0, 100)}</p>
                        <div className="price">
                            1 x ${item.price * item.discount}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$500</span>
            </div>
            <button>CHECKOUT</button>
            <span className="reset">Clear cart</span>
        </div>
    );
};
export default Cart;