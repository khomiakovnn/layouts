import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import './Store.css'

const Store = ({ products }) => {
    const [layout, setLayout] = useState('view_module');

    const handleSwitchLayout = () => {
        setLayout(layout === 'view_module' ? 'view_list' : 'view_module');
    };

    return (
        <div>
            <IconSwitch icon={layout} onSwitch={handleSwitchLayout} />
            {layout === 'view_module' ? (
                <CardsView cards={products} />
            ) : (
                <ListView items={products} />
            )}
        </div>
    );
};

export default Store;

