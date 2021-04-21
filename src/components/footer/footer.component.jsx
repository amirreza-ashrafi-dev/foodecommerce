import React from 'react';
import './footer.styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className='footer-container'>
        <div className="food-footer">
            <section>
                <h3>درباره ما</h3>
                <p>لورم ایپسوم متن ساختگی باراحان گرافیک است.
                لورم ایپسوم متن ساختگی با تولیدتفاده از طراحان گرافیک است.</p>
                <span>+9812345678</span>
                <span>test@gmail.com</span>
            </section>
            <section>
                <div className='social_logo'>
                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <ul>
                    <li><img src="https://preview.hasthemes.com/neha/assets/img/icon-img/1.jpg" alt="footerImage" /></li>
                    <li><img src="https://preview.hasthemes.com/neha/assets/img/icon-img/2.jpg" alt="footerImage" /></li>
                    <li><img src="https://preview.hasthemes.com/neha/assets/img/icon-img/2.jpg" alt="footerImage" /></li>
                    <li><img src="https://preview.hasthemes.com/neha/assets/img/icon-img/2.jpg" alt="footerImage" /></li>
                </ul>
                <span>تمامی حقوق محفوظ ساخته شده توسط امیررضا اشرفی</span>
            </section>
            <section>
                <h3>خبر نامه</h3>
                <p>سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک</p>
                <div className='news__letter'>
                    <input type="text" placeholder='ایمیل شما ....' />
                    <input type="button" value="عضویت" />
                </div>
            </section>
        </div>
    </footer>
)

export default Footer;