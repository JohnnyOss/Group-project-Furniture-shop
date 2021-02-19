import React from 'react';
import styles from './Search.module.scss';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = () => {
  return (
    <div className={styles.root}>
      <NewFurniture />
    </div>
  );
};

export default Search;
