import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({ name, price, promo, stars, id }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant='outline'
          className={parseInt(id.slice(20)) % 2 === 0 ? styles.checked : ''}
        >
          <FontAwesomeIcon icon={faHeart} className={styles.icon}>
            Favorite
          </FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={parseInt(id.slice(20)) % 3 === 0 ? styles.checked : ''}
        >
          <FontAwesomeIcon icon={faExchangeAlt} className={styles.icon}>
            Add to compare
          </FontAwesomeIcon>
        </Button>
      </div>
      {parseInt(id.slice(20)) % 2 === 0 ? (
        <div className={styles.price}>
          <Button noHover variant='small' className={styles.firstPrice}>
            $ {1.4 * price}
          </Button>
          <Button noHover variant='small' className={styles.promoPrice}>
            $ {price}
          </Button>
        </div>
      ) : (
        <div className={styles.price}>
          <Button noHover variant='small' className={styles.promoPrice}>
            $ {price}
          </Button>
        </div>
      )}
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
};

export default ProductBox;