import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faMinusSquare,
  //faPlusSquare,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

const Cart = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.header}`}>
          <div className={`col text-left ${styles.cart}`}>
            <p className={styles.title}>Cart</p>
          </div>
          <div className={`col text-right ${styles.iconBox}`}>
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
            {`> Cart`}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='table'>
          <table className='table table-hover'>
            <thead className={styles.thead}>
              <tr className={styles.theadItem}>
                <th scope='col'>&nbsp;</th>
                <th scope='col'>&nbsp;</th>
                <th scope='col'>Product</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.theadItem}>
                <th scope='row'>
                  <Button className={styles.productRemover}>
                    <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                  </Button>
                </th>
                <td>
                  <img className={styles.productImage} alt='x'></img>
                </td>
                <td>Product nr 9</td>
                <td>price</td>
                <td>
                  quantity
                  <button
                    type='button'
                    className='button hollow circle'
                    data-quantity='minus'
                    data-field='quantity'
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} />
                  </button>
                </td>
                <td>total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
