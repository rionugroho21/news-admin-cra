import React from 'react';
import loading from './loading.gif';
import './loading.css'

export default () => {
    const img = {
        width: '200px', 
        margin: 'auto', 
        display: 'block'
    };

    return (
        <div>
            {/* <img 
                src={loading} 
                style={img}
                alt="Loading..."
                /> */}
            <div class="wrap">
                <div class="loading-box">
                    <div class="loading-head"></div>
                    <div class="loading-content"></div>
                    <div class="loading-footer"></div>
                </div>
                <div class="loading-box">
                    <div class="loading-head"></div>
                    <div class="loading-content"></div>
                    <div class="loading-footer"></div>
                </div>
                <div class="loading-box">
                    <div class="loading-head"></div>
                    <div class="loading-content"></div>
                    <div class="loading-footer"></div>
                </div>
            </div>
        </div>
    )
}
