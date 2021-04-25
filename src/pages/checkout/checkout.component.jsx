import React from 'react';
import Banner from '../../components/top-banner/top-banner.component';
import Layout from '../../components/layout/layout.component';
import OrderTable from '../../components/order-table/order-table.component';
import OrderForm from '../../components/checkout-form/checkout-form.component';

const Checkout = () => {

    return (
        <>
            <Banner imgPath="https://preview.hasthemes.com/neha/assets/img/bg/breadcrumb.jpg" />
            <Layout>
                <OrderTable />
                <OrderForm />
            </Layout>
        </>
    )
}


export default Checkout;