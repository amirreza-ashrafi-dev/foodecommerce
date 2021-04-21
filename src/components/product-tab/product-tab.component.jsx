import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.styles.sass';
import ProductCard from '../product-card/product-card.component';

const ProductTab = () => {
    return (
        <Tabs className='tab__wrapper'>
            <TabList>
                <Tab selectedClassName='active'>تب شماره یک</Tab>
                <Tab selectedClassName='active'>تب شماره دو</Tab>
                <Tab selectedClassName='active'>تب شماره ۳</Tab>
                <Tab selectedClassName='active'>تب شماره ۴</Tab>
            </TabList>

            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </TabPanel>
            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </TabPanel>
        </Tabs>
    )
}

export default ProductTab;