import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySlider';
import Button from '../../common/Button/Button';

const Gallery = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.row}>
        <div className='col-6'>
          <GallerySlider />
        </div>
        <div className='col-6'>
          <div className={styles.imageWrapper}>
            <img
              src='https://cdn.pixabay.com/photo/2020/02/17/08/12/chair-4855824_960_720.jpg'
              alt=''
            ></img>
            <div className={styles.content}>
              <div className={styles.contentInfo}>
                <p>
                  from <span className={styles.bigText}>$50.80</span>
                </p>
              </div>
              <p className={styles.product}>Bedroom Bed</p>
              <div className={styles.contentButton}>
                <Button variant='main' className={styles.button}>
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
