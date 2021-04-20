import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabs.styles.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faEye } from '@fortawesome/free-solid-svg-icons';

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

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/3.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>30000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/4.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/5.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/6.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>


                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

            </TabPanel>

            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>


                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

            </TabPanel>

            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/2.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/2.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/5.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>


                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/1.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

            </TabPanel>

            <TabPanel className='tab__panel' selectedClassName='tabpanel__selected'>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/5.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/5.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/5.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/3.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/3.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>


                <div className='tab__items'>
                    <img src="https://preview.hasthemes.com/neha/assets/img/product/food/2.jpg" alt="" />

                    <div className='product-info'>
                        <h4>محصول شماره یک</h4>
                        <span>20000 تومان</span>
                        <ul>
                            <li><a href="/"><FontAwesomeIcon icon={faShoppingBasket} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faEye} /></a></li>
                        </ul>
                    </div>
                </div>

            </TabPanel>
        </Tabs>
    )
}

export default ProductTab;