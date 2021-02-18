import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSubpage.module.scss';
import SocialMediaNavigation from '../../common/SocialMediaNavigation/SocialMediaNavigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEnvelope,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import Button from '../../common/Button/Button';

const ProductSubpage = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row '}>
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
            <div className={`${styles.row} row`}>
              <div className='col-9'>
                <h4> Sunbaby Magic Bear Chair</h4>
                <div className={`${styles.wrapper} row `}>
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
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className='row'>
              <div className={styles.oldPrice}>$350.00</div>
              <div className={styles.oldPrice}>$250.00</div>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className='row'>
              <Button variant='product' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                ADD TO CART
              </Button>
              <Button variant='product' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button variant='product'>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <Button variant='product'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
            <div className='row'>
              <p>Quantity:</p>
              <input type='number'></input>
              <Button variant='product'>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button variant='product'>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className='row'>
              <h6>Quick Overview</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={`${styles.wrapper} row `}>
              <p>
                <b>Availability: </b>
              </p>
              <p>In Stock</p>
            </div>
            <div className='row'>
              <p>
                <b>Category:</b>
              </p>
              <p>Furniture</p>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <SocialMediaNavigation />
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
