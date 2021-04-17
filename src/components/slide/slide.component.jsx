import React from 'react';
import './slide.styles.sass';

const Slide = ({ slideUrl }) => (
    <div className='slide'>
        <div className='image-slider'><img src={slideUrl} alt="" /></div>
        <div className='slide-text'>
            <h2>غذای دلپذیر و سالم</h2>
            <h3>کاملا سالم و ارگانیک</h3>
            <a href="/">خرید</a>
        </div>
    </div>
)

export default Slide;