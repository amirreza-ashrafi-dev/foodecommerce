import React from 'react';
import { useLocation } from 'react-router-dom';
import './top-banner.styles.sass';
import TranslateRoute from '../translate-route/translate-route.component';
import Layout from '../layout/layout.component';
import { selectCartItems, totalPrice } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Banner = ({ imgPath, items, totalPrice }) => {
    console.log('from checkout', items);
    console.log('totalprice', totalPrice)
    const location = useLocation();
    return (
        <>
            <div className='banner'>
                <img src={imgPath} alt="imgPath" />
                <TranslateRoute routePath={location.pathname} />
            </div>
            <Layout>
                <div className='order'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">محصول</th>
                                <th scope="col">جمع</th>
                                <th scope="col">تعداد</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item) => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th scope="row">-</th>
                                <td className='total'>جمع کل</td>
                                <td className='total'>{totalPrice} تومان</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='form'>Form</div>
            </Layout>
        </>

    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    totalPrice: totalPrice
})

export default connect(mapStateToProps)(Banner);