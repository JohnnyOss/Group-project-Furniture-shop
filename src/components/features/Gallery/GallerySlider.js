import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faExchangeAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const GallerySlider = props => {
  const { stars, gallery, products } = props;

  const defaultCategory = gallery.find(category => category.name === 'Top seller').id;
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [slideNumber, setSlideNumber] = useState(0);
  const [pictureNumber, setPictureNumber] = useState(0);
  const defaultProduct = products.find(
    product => product.id === 'aenean-ru-bristique-3'
  ).id;
  const [activeProduct, setActiveProduct] = useState(defaultProduct);

  const handleSlideLeft = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber - 6;
    if (newSlideNumber >= 0) {
      setSlideNumber(newSlideNumber);
    } else {
      setSlideNumber(slideNumber);
    }
  };

  const handleSlideRight = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber + 6;
    setSlideNumber(newSlideNumber);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const handleProductChange = productId => {
    let productNo = 0;
    products.forEach(function(element, index) {
      if (element.id === productId) {
        productNo = index;
      }
    });
    setPictureNumber(productNo);
    setActiveProduct(productId);
  };

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h3>Furniture Gallery</h3>
      </div>
      <div className={styles.panelBar}>
        <ul>
          {gallery.map(item => (
            <li key={item.id}>
              <a
                href='/#'
                className={item.id === activeCategory ? styles.active : ''}
                onClick={() => handleCategoryChange(item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {products.slice(pictureNumber, pictureNumber + 1).map(product => (
        <div key={product.id} className={styles.imageBig}>
          <div>
            <img
              src={
                product.image !== undefined
                  ? product.image
                  : 'https://cdn.pixabay.com/photo/2018/01/20/09/42/sofa-3094153_960_720.jpg'
              }
              alt={product.name}
            ></img>
          </div>
          <div className={styles.toolsWrapper}>
            <div className={styles.toolsbox}>
              <Button variant='gallery' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <span>Like it</span>
            </div>
            <div className={styles.toolsbox}>
              <Button variant='gallery' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <span>Compare it</span>
            </div>
            <div className={styles.toolsbox}>
              <Button variant='gallery' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <span>Show more</span>
            </div>
            <div className={styles.toolsbox}>
              <Button variant='gallery' className={styles.toolsItem}>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Button>
              <span>Add to cart</span>
            </div>
          </div>
          <div className={styles.nameWrapper}>
            <div className={styles.namePrice}>
              <div className={styles.priceNew}>${product.price}</div>
              <div className={styles.priceOld}>$160.00</div>
            </div>
            <div className={styles.nameRange}>
              <h6>{product.name}</h6>
              <div className={styles.nameStars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='/#'>
                    {i <= stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.slider}>
        <div className={styles.arrow} onClick={handleSlideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
        </div>
        {products.slice(slideNumber, slideNumber + 6).map(product => (
          <div
            key={product.id}
            className={styles.thumbnail}
            onClick={() => handleProductChange(product.id)}
          >
            <img
              alt={product.name}
              src={
                product.image !== undefined
                  ? product.image
                  : 'https://cdn.pixabay.com/photo/2018/01/20/09/42/sofa-3094153_960_720.jpg'
              }
              className={product.id === activeProduct ? styles.active : ''}
            ></img>
          </div>
        ))}
        <div className={styles.arrow} onClick={handleSlideRight}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
        </div>
      </div>
    </div>
  );
};

GallerySlider.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
  gallery: PropTypes.array,
  products: PropTypes.array,
};

export default GallerySlider;
