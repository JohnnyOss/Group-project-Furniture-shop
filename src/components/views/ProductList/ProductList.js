import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PriceSlider from '../../common/PriceSlider/PriceSlider';
import { StylesProvider } from '@material-ui/core/styles';
import FilterColor from '../../features/FilterColor/FilterColor';

const ProductList = () => (
  <div className={styles.root}>
    <Grid>
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
        </Col>
      </Row>
    </Grid>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
