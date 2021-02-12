import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

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
        </div>
        <div className={styles.slider}>
          <div className={styles.arrow + ' ' + styles.thumbnail}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
          </div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.arrow + ' ' + styles.thumbnail}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
          </div>
        </div>
      </div>
    );
  }
}

export default GallerySlider;
