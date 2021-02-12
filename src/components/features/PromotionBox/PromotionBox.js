import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PromotionBox.module.scss';

const PromotionBox = () => (
  <div className='col-6'>
    <img
      className={styles.image}
      src='https://cdn.pixabay.com/photo/2018/01/20/09/42/sofa-3094153_960_720.jpg'
      alt=''
    ></img>
  </div>
);

export default PromotionBox;
