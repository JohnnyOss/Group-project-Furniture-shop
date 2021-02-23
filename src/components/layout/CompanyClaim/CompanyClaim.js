import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = ({ cartAmount }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col-auto col-md-4 text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className='col-6 col-md-4 text-center'>
          <a href='/#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <div className={`col-6 col-md-4 text-right ${styles.cart}`}>
          <a href='/#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>{cartAmount}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

CompanyClaim.propTypes = {
  cartAmount: PropTypes.number,
};

export default CompanyClaim;
