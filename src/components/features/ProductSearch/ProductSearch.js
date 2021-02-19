import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.list}>
        Select a category
        <li className={styles.listCategory}>
          Bedroom
          <ul className={styles.listCategoryItems}>
            <li>
              <a href='/#'>Beds</a>
            </li>
            <li>
              <a href='/#'>Mattresses</a>
            </li>
            <li>
              <a href='/#'>Wardrobes</a>
            </li>
          </ul>
        </li>
        <li className={styles.listCategory}>
          Dining
          <ul className={styles.listCategoryItems}>
            <li>
              <a href='/#'>Dining chairs</a>
            </li>
            <li>
              <a href='/#'>Dining tables</a>
            </li>
            <li>
              <a href='/#'>Sofas</a>
            </li>
          </ul>
        </li>
        <li className={styles.listCategory}>
          Kitchen
          <ul className={styles.listCategoryItems}>
            <li>
              <a href='/#'>Kitchen chairs</a>
            </li>
            <li>
              <a href='/#'>Kitchen tables</a>
            </li>
          </ul>
        </li>
        <li className={styles.listCategory}>
          Office
          <ul className={styles.listCategoryItems}>
            <li>
              <a href='/#'>Desks</a>
            </li>
            <li>
              <a href='/#'>Office chairs</a>
            </li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <a href='/search'>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </a>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
