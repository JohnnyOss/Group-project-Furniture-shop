import React from 'react';
import styles from './Furniture.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PropTypes from 'prop-types';

class Furniture extends React.Component {
  render() {
    const { products, categoryProducts } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBox}>
            <div className={styles.heading}>
              <h3>FURNITURE</h3>
              <div className={styles.menu}>
                <div className={styles.sortInput}>
                  <h5>Sort By</h5>
                  <div className={styles.filter}>
                    <p>Price. Lowest Price</p>
                    <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
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
                {categoryProducts.length > 0 &&
                  categoryProducts.map(item => {
                    return (
                      <div key={item.id}>
                        <ProductBox {...item} />
                      </div>
                    );
                  })}
                {categoryProducts.length <= 0 && (
                  <div className={styles.noProduct}>
                    <p>No product available in given criteria. Please search again.</p>
                  </div>
                )}
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
