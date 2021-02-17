import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSubpage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import Button from '../../common/Button/Button';

const ProductSubpage = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.row}>
          <div className='col-12 col-md-5'>
            <div className={styles.imageWrapper}>
              <img
                src={
                  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                }
                alt={''}
              />
            </div>
            <div className={styles.galleryWrapper}></div>
          </div>
          <div className='col-12 col-md-7'>
            <div className='row'>
              <div className='col-9'>
                <h3> Sunbaby Magic Bear Chair</h3>
                <div className='row'>
                  <div>
                    <ProductRating />
                  </div>
                  <div>
                    <p>(0reviews)</p>
                  </div>
                  <div>
                    <p>Add your review</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faStar}>Favorite</FontAwesomeIcon>
                </Button>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faStar}>Favorite</FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductSubpage.propTypes = {
  id: PropTypes.string.isRequired,
  starRating: PropTypes.bool,
  stars: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default ProductSubpage;
