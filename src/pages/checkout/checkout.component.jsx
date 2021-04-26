import React from 'react';
import Banner from '../../components/top-banner/top-banner.component';
import Layout from '../../components/layout/layout.component';
import OrderTable from '../../components/order-table/order-table.component';
import OrderForm from '../../components/checkout-form/checkout-form.component';
import { Route, useLocation } from 'react-router-dom';

const Checkout = ({ match }) => {

    const location = useLocation();
    console.log(match.path);
    console.log(location.pathname);

    return (
        <>
            <Banner imgPath="https://preview.hasthemes.com/neha/assets/img/bg/breadcrumb.jpg" />
            <Layout>
                <OrderTable />
                <Route path={`${match.path}/finalOrder`} component={OrderForm} />
            </Layout>
        </>
    )
}


export default Checkout;