import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faEye } from '@fortawesome/free-solid-svg-icons';
import './product-card.styles.sass';

const ProductCard = () => (
    <div className='tab__items'>
        <img src="https://preview.hasthemes.com/neha/assets/img/product/food/3.jpg" alt="" />

        <div className='product-info'>
            <h4>محصول شماره یک</h4>
            <span>30000 تومان</span>
            <ul>
                <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
            </ul>
        </div>
    </div>
)

export default ProductCard;