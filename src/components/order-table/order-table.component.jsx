import React from 'react';
import { selectCartItems, totalPrice } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RmoveCart } from '../../redux/cart/cart.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './order-table.styles.sass';

const OrderTable = ({ items, totalPrice, remove }) => {
    const removeFromCart = (item) => {
        remove(item);
    }
    return (
        <div className='order'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">محصول</th>
                        <th scope="col">جمع</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">حذف</th>
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
                                <td><button onClick={() => removeFromCart(item)}><FontAwesomeIcon icon={faTimes} /></button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th scope="row">-</th>
                        <td className='total'>جمع کل</td>
                        <td className='total' style={{ width: '140px' }}>{totalPrice} تومان</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    totalPrice: totalPrice
})

const mapDispatchToProps = (dispatch) => ({
    remove: (item) => dispatch(RmoveCart(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);