import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortBy.module.scss';

const SortBy = ({ products, category }) => {
  const sortingProducts = e => {};
  let sorted = products.filter(item => item.category === category);
  // if(e.currentTarget === 'Price: Lowest first') {
  //   .sort(())

  // }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filter}>
        <select onChange={e => sortingProducts(e)}>
          <option>Price: Lowest first</option>
          <option>Price: Highest first</option>
          <option>Name: A-Z</option>
          <option>Name: Z-A</option>
          <option>Best rated</option>
        </select>
      </div>
    </div>
  );
};

SortBy.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
};

export default SortBy;
