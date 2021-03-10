import React from 'react';
import styles from './Furniture.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import ProductBoxList from '../../common/ProductBoxList/ProductBoxList';
import PropTypes from 'prop-types';

class Furniture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { products} = this.props;
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
                  <Button
                    variant='furniture'
                    onClick={this.onToggle}
                    style={this.state.isVisible ? { color: '#d58e32' } : null}
                  >
                    <FontAwesomeIcon icon={faThLarge} className={styles.icon}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                  <Button
                    variant='furniture'
                    onClick={this.onToggle}
                    style={this.state.isVisible ? null : { color: '#d58e32' }}
                  >
                    <FontAwesomeIcon icon={faThList} className={styles.icon}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {this.state.isVisible ? (
            <div className='row'>
              {products.slice(0, 6).map(item => (
                <div key={item.id} className='col-4'>
                  <ProductBox {...item} />
                </div>
              ))}
            </div>
          ) : (
            <div className='row'>
              {products.slice(0, 6).map(item => (
                <div key={item.id} className={styles.productListBox}>
                  <ProductBoxList {...item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Furniture.propTypes = {
  products: PropTypes.array,
};

export default Furniture;
