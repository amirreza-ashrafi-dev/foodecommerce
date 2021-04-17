import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import './slider.styles.sass';
import Slide from '../slide/slide.component';

// Slider image
import Slider2 from '../../img/slide1.jpg';

const Slider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            style={{
                marginTop: '20px'
            }}
        >

            <SwiperSlide style={{ width: '100vw', marginRight: 0 }}>

                <Slide slideUrl={Slider2} />

            </SwiperSlide>

            <SwiperSlide style={{ width: '100vw', marginRight: 0 }}>

                <Slide slideUrl={Slider2} />

            </SwiperSlide>

            <SwiperSlide style={{ width: '100vw', marginRight: 0 }}>

                <Slide slideUrl={Slider2} />

            </SwiperSlide>

        </Swiper >
    )
}

export default Slider;