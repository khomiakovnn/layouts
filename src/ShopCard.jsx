import React from 'react';
import './ShopCard.css'

const ShopCard = ({ name, price, color, img }) => {
    console.log( name, price, color, img)
    const containerStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    
    return (
        <div className="shop-card" style={containerStyle}>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{price}</p>
            <button>ADD TO CHART</button>
        </div>
    );
};

export default ShopCard;
