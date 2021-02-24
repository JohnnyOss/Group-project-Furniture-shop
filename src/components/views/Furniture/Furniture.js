import React from 'react';
import styles from './Furniture.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBox';
import PropTypes from 'prop-types';
import SortBy from '../../features/SortBy/SortBy';

class Furniture extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBox}>
            <div className={styles.heading}>
              <h3>FURNITURE</h3>
              <div className={styles.menu}>
                <div className={styles.sortInput}>
                  <h5>Sort By</h5>
                  <div>
                    <SortBy />
                  </div>
                </div>
                <div className={styles.sortInput}>
                  <h5>Show</h5>
                  <div className={styles.filter}>
                    {' '}
                    <p>12</p>
                    <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button variant='furniture'>
                    <FontAwesomeIcon icon={faThLarge} className={styles.icon}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                  <Button variant='furniture'>
                    <FontAwesomeIcon icon={faThList} className={styles.icon}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {products.slice(0, 6).map(item => (
              <div key={item.id} className='col-4'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Furniture.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
    })
  ),
};

Furniture.defaultProps = {
  products: [],
};

export default Furniture;
