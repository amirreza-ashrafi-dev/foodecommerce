import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.styles.sass';
import ProductCard from '../product-card/product-card.component';
import UseFetch from '../customHooks/useFetch/use-fetch.hook';

const ProductTab = () => {

    const productList = UseFetch('products')


    return (
        <Tabs className='tab__wrapper'>
            <TabList>
                <Tab selectedClassName='active'>تب شماره یک</Tab>
                <Tab selectedClassName='active'>تب شماره دو</Tab>
                <Tab selectedClassName='active'>تب شماره ۳</Tab>
                <Tab selectedClassName='active'>تب شماره ۴</Tab>
            </TabList>

            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                {
                    productList.map((product) => (
                        <ProductCard {...product} imagePath={product.images[0].imageurl.url} key={product.id} />
                    ))
                }

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                {
                    productList.map((product) => (
                        <ProductCard {...product} imagePath={product.images[0].imageurl.url} key={product.id} />
                    ))
                }

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                {
                    productList.map((product) => (
                        <ProductCard {...product} imagePath={product.images[0].imageurl.url} key={product.id} />
                    ))
                }

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                {
                    productList.map((product) => (
                        <ProductCard {...product} imagePath={product.images[0].imageurl.url} key={product.id} />
                    ))
                }

            </TabPanel>
        </Tabs>
    )
}

export default ProductTab;