import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  id,
  starRating,
  getCompared,
  changeCompare,
  isFavourite,
  toggleFavourite,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={image} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <Link id={id} to={`/product/${id}`}>
        <h5>{name}</h5>
      </Link>
      <div>
        <ProductRating id={id} starRating={starRating} stars={stars} />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant='outline'
          className={isFavourite ? styles.favourite : 'nonclass'}
          onClick={event => {
            event.preventDefault();
            toggleFavourite(id);
          }}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          onClick={() => {
            if (getCompared.find(item => item.id === id)) {
              changeCompare(id);
            } else if (getCompared.length <= 3) {
              changeCompare(id);
            }
          }}
          variant='outline'
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  starRating: PropTypes.bool,
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
  toggleFavourite: PropTypes.func,
  isFavourite: PropTypes.bool,
};

export default ProductBox;
