import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDealsCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const HotDealsCarousel = ({ image, name }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.description}>
        <h1>
          INDOOR <span>FURNITURE</span>
        </h1>
        <h3>Save up to 50% of all furniture</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant='main-light'>SHOP NOW</Button>
      </div>
    </div>
    <div className={styles.arrows}>
      <Button variant='main-carousel'>
        <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon>
      </Button>
      <Button variant='main-carousel'>
        <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
      </Button>
    </div>
  </div>
);

HotDealsCarousel.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default HotDealsCarousel;