import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PriceSlider from '../../common/PriceSlider/PriceSlider';
import { StylesProvider } from '@material-ui/core/styles';
import FilterColor from '../../features/FilterColor/FilterColor';
import FilterSize from '../../features/FilterSize/FilterSize';

import Furniture from './../Furniture/FurnitureContainer';
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
      <Row className={styles.order}>
        <Col md={8} lg={9} className={styles.content}>
          <div className='col-12'>
            <Furniture itemsPerSlide={6} />
          </div>
        </Col>
        <Col xs md={4} lg={3} className={styles.filters}>
          <h3 className={styles.header}>Filtry</h3>
          <div className={styles.filterRange}>
            <h5 className={styles.filterRange__name}>Filter by categories</h5>
            <FilterByCategories />
          </div>
          <div className={styles.filterRange}>
            <h5 className={styles.filterRange__name}>Filter by price</h5>
            <StylesProvider injectFirst>
              <PriceSlider />
            </StylesProvider>
          </div>

          <div>
            <h5 className={styles.filterRange__name}>Filter by color</h5>
            <FilterColor />
          </div>
          <div>
            <h5 className={styles.filterRange__name}>Filter by size</h5>
            <FilterSize />
          </div>
          <div className={styles.headerTags}>
            <h5 className={styles.filterRange__name}>Filter by tag</h5>
          </div>
          <div className={styles.filtersList}>
            <ul className={styles.tagFilter}>
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
