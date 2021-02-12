import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faExchangeAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class GallerySlider extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.heading}>
          <h3>Furniture Gallery</h3>
        </div>
        <div className={styles.panelBar}>
          <ul>
            <li>
              <a>Featured</a>
            </li>
            <li>
              <a className={styles.active}>Top seller</a>
            </li>
            <li>
              <a>Sale off</a>
            </li>
            <li>
              <a>Top rated</a>
            </li>
          </ul>
        </div>
        <div className={styles.imageBig}>
          <img
            src='https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg'
            alt=''
          ></img>
          <div className={styles.toolsWrapper}>
            <Button variant='outline' className={styles.toolsItem}>
              <FontAwesomeIcon icon={faHeart} className={styles.toolsIcon} />
            </Button>
            <Button variant='outline' className={styles.toolsItem}>
              <FontAwesomeIcon icon={faExchangeAlt} className={styles.toolsIcon} />
            </Button>
            <Button variant='outline' className={styles.toolsItem}>
              <FontAwesomeIcon icon={faEye} className={styles.toolsIcon} />
            </Button>
            <Button variant='outline' className={styles.toolsItem}>
              <FontAwesomeIcon icon={faShoppingBasket} className={styles.toolsIcon} />
            </Button>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
          </div>
          <div className={styles.thumbnail}>
            <img
              className={styles.active}
              src='https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.thumbnail}>
            <img
              src='https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.thumbnail}>
            <img
              src='https://cdn.pixabay.com/photo/2015/06/19/21/33/beach-815303_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.thumbnail}>
            <img
              src='https://cdn.pixabay.com/photo/2015/12/19/17/55/armchair-1100052_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.thumbnail}>
            <img
              src='https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.thumbnail}>
            <img
              src='https://cdn.pixabay.com/photo/2015/06/19/21/33/beach-815303_960_720.jpg'
              alt=''
            ></img>
          </div>
          <div className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
          </div>
        </div>
      </div>
    );
  }
}

export default GallerySlider;
