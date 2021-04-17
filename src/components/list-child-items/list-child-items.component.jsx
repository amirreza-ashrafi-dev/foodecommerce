import React from 'react';
import './list-child-items.styles.sass';
import { Link } from 'react-router-dom';

const ListChildItems = ({ list }) => (
    list.child.map((ch, idx) => (
        <div className='items_list' key={idx}>
            {ch.map((c, idx) => (
                <div className='child-list' key={idx}>
                    <span className={`${idx === 0 ? 'Bold' : ''}`} >
                        <Link to={idx > 0 ? c.to : ''}>{c.name}</Link>
                    </span>
                </div>
            ))}
        </div>
    ))
)

export default ListChildItems;