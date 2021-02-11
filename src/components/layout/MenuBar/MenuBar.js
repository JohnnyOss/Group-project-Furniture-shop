import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';
import Button from '../../common/Button/Button';

class MenuBar extends Component {
  state = {
    menuActive: false,
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => ({
      menuActive: !state.menuActive,
    }));
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='d-flex flex-row flex-sm-column-reverse flex-lg-row align-items-center flex-wrap'>
            <div className='col'>
              <ProductSearch />
            </div>
            <Button
              variant='outline'
              onClick={this.toggleMenu}
              className={styles.hamburger}
            >
              <FontAwesomeIcon icon={faBars}>x</FontAwesomeIcon>
            </Button>
            <div
              className={
                'col-auto ' +
                styles.menu +
                ' ' +
                (this.state.menuActive ? styles.active : '')
              }
            >
              <Button
                variant='outline'
                onClick={this.toggleMenu}
                className={styles.closeMenu}
              >
                <FontAwesomeIcon icon={faTimes}>x</FontAwesomeIcon>
              </Button>
              <ul>
                <li>
                  <a href='#' onClick={this.toggleMenu} className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Furniture
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Chair
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Table
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Sofa
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Bedroom
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.toggleMenu}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
