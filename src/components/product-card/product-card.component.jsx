import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faEye } from '@fortawesome/free-solid-svg-icons';
import './product-card.styles.sass';
import { AddToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const ProductCard = ({ title, price, imagePath, id, AddProductToCart }) => {
    const AddItem = (cartItem, e) => {

        e.preventDefault();
        console.log(cartItem)
        AddProductToCart(cartItem);
    }
    return (
        <div className='tab__items'>
            <img src={`https://immense-eyrie-67673.herokuapp.com${imagePath}`} alt={title} />

            <div className='product-info'>
                <h4>{title}</h4>
                <span>{price} تومان</span>
                <ul>
                    <li><a href="/" onClick={(e) => AddItem({ title, price, imagePath, id }, e)}><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                </ul>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    AddProductToCart: (cartItem) => dispatch(AddToCart(cartItem))
})

export default connect(null, mapDispatchToProps)(ProductCard);