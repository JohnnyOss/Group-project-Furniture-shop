import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Compare.module.scss';
import Button from '../../common/Button/Button';

const Compare = ({ comparedItem, changeItemCompare }) => {
  const isActive = comparedItem.length;

  if (isActive) {
    return (
      <div className={styles.component}>
        {comparedItem.map(item => (
          <div
            key={item.id}
            className={styles.box}
            onClick={() => (changeItemCompare = item.id)}
          >
            <img alt={'product'} src={item.image} className={styles.image}></img>
            <div className={styles.close}>x</div>
          </div>
        ))}
        <Button className={styles.button}>Add to compare</Button>
      </div>
    );
  } else {
    return '';
  }
};

Compare.propTypes = {
  itemCompare: PropTypes.array,
  changeItemCompare: PropTypes.func,
};

export default Compare;
