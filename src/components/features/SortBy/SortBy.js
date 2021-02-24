import React from 'react';
//import PropTypes from 'prop-types';
import styles from './SortBy.module.scss';

const SortBy = () => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filter}>
        <select>
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

// SortBy.propTypes = {

// };

export default SortBy;
