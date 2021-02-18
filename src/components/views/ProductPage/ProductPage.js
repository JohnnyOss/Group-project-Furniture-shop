import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductMore from '../../common/ProductMore/ProductMore';
import Newsletter from '../../common/Newsletter/Newsletter';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      This is ProductPage
      <ProductMore />
      <Newsletter />
    </div>
  );
};

//ProductPage.propTypes = {};

export default ProductPage;
