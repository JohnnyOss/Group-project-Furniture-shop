import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-6 col-md-6 col-sm-8 text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='/#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a href='/#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col-6 col-md-6 col-sm-4 text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                <span className={styles.topbarText}>Login</span>
              </a>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                <span className={styles.topbarText}>Register</span>
              </a>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
