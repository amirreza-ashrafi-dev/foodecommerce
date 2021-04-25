import React from 'react';

const ErrorInput = ({ touched, error, }) => {
    if (touched && error) {
        return (
            <label style={{ color: 'red' }}>{error}</label>
        )
    }

    return null
}

export default ErrorInput;