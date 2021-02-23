import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PriceSlider from '../../common/PriceSlider/PriceSlider';
import { StylesProvider } from '@material-ui/core/styles';
import Furniture from './../Furniture/FurnitureContainer';

const ProductList = () => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <Col md={8} lg={9} className={styles.content}>
          <div className='col-12'>
            <Furniture itemsPerSlide={6} />
          </div>
        </Col>
        <Col xs md={4} lg={3} className={styles.filters}>
          <h3 className={styles.header}>Filtry</h3>
          <div className={styles.filterRange}>
            <h5 className={styles.filterRange__name}>Filter by price</h5>
            <StylesProvider injectFirst>
              <PriceSlider />
            </StylesProvider>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
