import React from 'react';
import { useLocation } from 'react-router-dom';
import './top-banner.styles.sass';
import TranslateRoute from '../translate-route/translate-route.component';


const Banner = ({ imgPath }) => {
    const location = useLocation();
    return (
        <>
            <div className='banner'>
                <img src={imgPath} alt="imgPath" />
                <TranslateRoute routePath={location.pathname} />
            </div>

        </>

    )
}



export default Banner;