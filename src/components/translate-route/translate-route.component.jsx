import React from 'react';

const TranslateRoute = ({ routePath }) => {
    switch (routePath) {
        case '/checkout':
            return (
                <>
                    <h1>پرداخت</h1>
                    <h3>خانه / پرداخت</h3>
                </>
            )

        default:
            return routePath;
    }
}

export default TranslateRoute;