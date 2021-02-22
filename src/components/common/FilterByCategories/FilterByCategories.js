import React from 'react';
import styles from './FilterByCategories.module.scss';

const FilterByCategories = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY CATEGORIES'}
        </div>
        <container>
          <ul className={styles.byCategories}>
            <li>
              Furniture<span className={styles.dot}>3</span>
            </li>
            <li>
              Sofa<span className={styles.dot}>4</span>
            </li>
            <li>
              Chair<span className={styles.dot}>5</span>
            </li>
            <li>
              Table<span className={styles.dot}>5</span>
            </li>
            <li>
              Bedroom<span className={styles.dot}>5</span>
            </li>
            <li>
              Furniture <span className={styles.dot}>5</span>
            </li>
          </ul>
        </container>
      </div>
    </div>
  </div>
);

export default FilterByCategories;
