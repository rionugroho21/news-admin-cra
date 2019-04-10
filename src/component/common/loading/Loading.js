import React from 'react';
import loading from './loading.gif'

export default () => {
    const img = {
        width: '200px', 
        margin: 'auto', 
        display: 'block'
    };

    return (
        <div>
            <img 
                src={loading} 
                style={img}
                alt="Loading..."
                />
        </div>
    )
}
