import React from 'react';
import Logo from '../../img/Logo.png';
import './header.styles.sass';
import { ReactComponent as Bascket } from '../../img/shopping-basket.svg';
import MenuImage from '../../img/1.png';

const Header = () => (
    <div className='Header__Wrapper'>
        <div className='Logo'><img src={Logo} alt="Logo" /></div>
        <ul className='menu-lists'>
            <li><a href="/test">ورود</a></li>
            <li><a href="/">عضویت</a></li>
            <li><a href="/">خانه</a></li>
            <li><a href="/">درباره</a></li>
            <li>
                <a href="/">فروشگاه</a>
                <ul>
                    <div className='items'>
                        <div className='items_list'>
                            <h3>لیست شماره ۱</h3>
                            <span><a href="/test">تست ۱</a></span>
                            <span><a href="/test">تست ۲</a></span>
                            <span><a href="/test">تست ۳</a></span>
                            <span><a href="/test">تست ۴</a></span>
                            <span><a href="/test">تست ۵</a></span>
                            <span><a href="/test">تست ۶</a></span>
                            <span><a href="/test">تست ۷</a></span>
                            <span><a href="/test">تست ۸</a></span>
                        </div>
                        <div className='items_list'>
                            <h3>لیست شماره ۲</h3>
                            <span><a href="/test">تست ۱</a></span>
                            <span><a href="/test">تست ۲</a></span>
                            <span><a href="/test">تست ۳</a></span>
                            <span><a href="/test">تست ۴</a></span>
                            <span><a href="/test">تست ۵</a></span>
                            <span><a href="/test">تست ۶</a></span>
                            <span><a href="/test">تست ۷</a></span>
                            <span><a href="/test">تست ۸</a></span>
                        </div>
                        <div className='items_list'>
                            <h3>لیست شماره ۳</h3>
                            <span><a href="/test">تست ۱</a></span>
                            <span><a href="/test">تست ۲</a></span>
                            <span><a href="/test">تست ۳</a></span>
                            <span><a href="/test">تست ۴</a></span>
                            <span><a href="/test">تست ۵</a></span>
                            <span><a href="/test">تست ۶</a></span>
                            <span><a href="/test">تست ۷</a></span>
                            <span><a href="/test">تست ۸</a></span>
                        </div>
                    </div>
                    <div className='image'><img src={MenuImage} alt="" /></div>
                </ul>
            </li>
            <li><a href="/">ارتباط با ما</a></li>
        </ul>
        <div className='right__menu'>
            <Bascket className='bascket' />
        </div>
    </div>
);

export default Header;