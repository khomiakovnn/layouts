import React from 'react';
import './ShopItem.css'

const ShopItem = ({ name, price, color, img }) => {
    return (
        <div className="shop-item">
            <img src={img} alt={name} className='item-img'/>
            <div className='item-name'>{name}</div>
            <div className='item-color'>{color}</div>
            <div className='item-price'>{price}</div>
            <button className='item-button'>ADD TO CHART</button>
        </div>
    );
};

export default ShopItem;
