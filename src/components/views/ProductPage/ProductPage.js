import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductMore from '../../common/ProductMore/ProductMore';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      This is ProductPage
      <ProductMore />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
