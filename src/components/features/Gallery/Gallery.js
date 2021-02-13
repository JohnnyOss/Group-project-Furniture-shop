import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySlider';
import Button from '../../common/Button/Button';

const Gallery = products => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.row}>
        <div className='col-12 col-md-6'>
          <GallerySlider {...products} />
        </div>
        <div className='col-12 col-md-6'>
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

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default Gallery;
