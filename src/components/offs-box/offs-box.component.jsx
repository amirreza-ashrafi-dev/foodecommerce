import React from 'react';
import './offs-box.styles.sass';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchOffs } from '../../redux/offs/offs.reselect';

const OffsBox = ({ offs }) => {
    return offs.map((off, idx) => (
        <div className='Offs__Box' key={idx}>
            <img src="https://preview.hasthemes.com/neha/assets/img/banner/20.jpg" alt="" />
            <div className='banner_content'>
                <h3>{off.name}</h3>
                <h2>{off.desc}</h2>
                <img src="https://preview.hasthemes.com/neha/assets/img/icon-img/7.png" alt="" />
            </div>
        </div>
    ))
}

const mapStateToProps = createStructuredSelector({
    offs: fetchOffs
})

export default connect(mapStateToProps)(OffsBox);