import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductMore from '../../common/ProductMore/ProductMore';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      This is ProductPage
      <ProductMore />
      <NewFurniture />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
