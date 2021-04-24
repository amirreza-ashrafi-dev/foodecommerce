import React from 'react';
import Logo from '../../img/Logo.png';
import './header.styles.sass';
import { ReactComponent as Bascket } from '../../img/shopping-basket.svg';
import MenuImage from '../../img/1.png';
import { Link } from 'react-router-dom';
import ListChildItems from '../list-child-items/list-child-items.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchMenuList } from '../../redux/menu-list/menu-list.selector';
import { TotalItems } from '../../redux/cart/cart.selector';
import { useHistory } from 'react-router-dom';

const Header = ({ Lists, itemCount }) => {
    const history = useHistory();
    return (
        <div className='Header__Wrapper'>
            <div className='Logo'><img src={Logo} alt="Logo" /></div>
            <ul className='menu-lists'>
                {
                    Lists.map((List, idx) => {
                        return (
                            <li key={idx} >
                                <Link to={List.to}>{List.name}</Link>
                                {List.child ?
                                    <ul>
                                        <div className='items'>
                                            <ListChildItems list={List} />
                                        </div>
                                        <div className='image'><img src={MenuImage} alt="" /></div>

                                    </ul>

                                    : ''}
                            </li>
                        )
                    })
                }
            </ul>
            <div className='right__menu' onClick={() => history.push('/checkout')}>
                <Bascket className='bascket' />
                {itemCount > 0 ? <h3>{itemCount}</h3> : ''}
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    Lists: fetchMenuList,
    itemCount: TotalItems
})
export default connect(mapStateToProps)(Header);