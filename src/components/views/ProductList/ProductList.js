import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PriceSlider from '../../common/PriceSlider/PriceSlider';
import { StylesProvider } from '@material-ui/core/styles';
import FilterByCategories from '../../common/FilterByCategories/FilterByCategories';
import ProductListBanner from '../../features/ProductListBanner/ProductListBanner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Newsletter from '../../common/Newsletter/Newsletter';
import Brands from '../../features/Brands/BrandsContainer';

const ProductList = () => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <Col className='col-12'>
          <ProductListBanner />
        </Col>
      </Row>
      <Row>
        <Col md={8} lg={9} className={styles.content}>
          <div className='col-12'>
            <h3 className={styles.header}>Zawartość</h3>
            <div className={styles.noProduct}>
              <p>Empty</p>
            </div>
          </div>
        </Col>
        <Col xs md={4} lg={3} className={styles.filters}>
          <h3 className={styles.header}>Filtry</h3>
          <FilterByCategories />
          <div className={styles.filterRange}>
            <h5 className={styles.filterRange__name}>Filter by price</h5>
            <StylesProvider injectFirst>
              <PriceSlider />
            </StylesProvider>
          </div>
          <div className={styles.headerTags}>
            <span className={styles.title}>Filter by tag</span>
          </div>
          <div className={`${styles.filtersList}`}>
            <ul className={`${styles.tagFilter}`}>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Table</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Chair</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Hand Bag</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Women</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Fashion</span>
                </div>
              </li>
              <li>
                <div className={styles.tag}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  <span>Clothes</span>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
    <Brands />
    <div className={styles.newsletter}>
      <Newsletter />
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
