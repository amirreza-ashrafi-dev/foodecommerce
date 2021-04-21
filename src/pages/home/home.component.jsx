import React from 'react';
import Slider from '../../components/slider/slider.component';
import OffsLists from '../../components/offs-list/offlist.component';
import ProductTab from '../../components/product-tab/product-tab.component';
import FooterSlider from '../../components/footer-slider/footer-slider.component';
import './home.styles.sass';

const Home = () => (
    <div>
        <Slider />
        <OffsLists />
        <div className='content'>
            <ProductTab />
            <FooterSlider multiple={false} />
            <FooterSlider multiple={true} />
        </div>
    </div>
)

export default Home;