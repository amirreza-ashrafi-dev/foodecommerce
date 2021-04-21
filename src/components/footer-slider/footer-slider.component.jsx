import React from 'react';
import swiperCore, { Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './footer-slider.styles.sass';
import ProductCard from '../product-card/product-card.component';

const FooterSlider = ({ multiple }) => {
    swiperCore.use([Parallax]);

    return <div>
        {
            !multiple ? <Swiper
                spaceBetween={50}
                slidesPerView={1}
                parallax
                autoplay={true}
                scrollbar={{ draggable: true }}
                className='swiper__foter__container'
            >
                <SwiperSlide className='swiper__footer__child__container'>
                    <div className='swiper__footer_children'>
                        <img src="https://preview.hasthemes.com/neha/assets/img/team/1.png" alt="" />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کارب
                        ردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهاه پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                                و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <span>امیررضا اشرفی</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper__footer__child__container'>
                    <div className='swiper__footer_children'>
                        <img src="https://preview.hasthemes.com/neha/assets/img/team/1.png" alt="" />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                        از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کارب
                        ردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فرا
                        وان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                        و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
                        ، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                                و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <span>امیررضا اشرفی</span>
                    </div>
                </SwiperSlide>
            </Swiper> :
                <div>
                    <h1 className='footer_slider_header_text'>محصولات جدید</h1>
                    <p className='footer_slider_paragraph_text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                    </Swiper>

                </div>
        }
    </div>

}

export default FooterSlider;