import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import PromotionBox from '../PromotionBox/PromotionBox';
import GallerySlider from './GallerySlider';

const Gallery = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.row}>
        <div className='col-6'>
          <GallerySlider />
        </div>
        <PromotionBox />
      </div>
    </div>
  </div>
);

export default Gallery;
