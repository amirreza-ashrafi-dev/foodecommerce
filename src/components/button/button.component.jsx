import React from 'react';
import './button.styles.sass';
import { useHistory, useLocation } from 'react-router-dom';

const Button = ({ text, path }) => {
    const history = useHistory();
    console.log(history);
    console.log(history.location);
    return (
        <button className='main__button' onClick={() => path ? history.push(`${path}`) : ''}>{text}</button>
    )
}

export default Button;