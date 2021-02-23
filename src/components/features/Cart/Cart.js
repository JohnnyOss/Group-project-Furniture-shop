import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  //faMinusSquare,
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
        <div className='table1'>
          <table className='table'>
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
                <td>
                  <span className='price-currency-symbol'>$ </span>
                  price
                </td>
                <td>quantity</td>
                <td>
                  <span className='price-currency-symbol'>$ </span>
                  Total price
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.buttons}>
          <label htmlFor='coupon-code'></label>
          <input type='text' placeholder='Coupon code' className={styles.input}></input>
          <Button variant='small' className={styles.button}>
            Apply coupon
          </Button>
          <Button variant='small' className={`${styles.button}`}>
            Update cart
          </Button>
        </div>
        <div className={`table ${styles.table}`}>
          <table className={`col-6 ${styles.tableTotal}`}>
            <thead className={styles.thead}>
              <tr className={styles.theadItem}>
                <th>&nbsp;</th>
                <th scope='col'>Cart total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.theadItem}>
                <th scope='col'>Subtotal</th>
                <td>
                  <span className='price-currency-symbol'>$ </span>
                  Subtotal price
                </td>
              </tr>
              <tr className={styles.theadItem}>
                <th scope='col'>Total</th>
                <td>
                  <span className='price-currency-symbol'>$ </span>
                  Total price
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.buttons}>
            <Button variant='small' className={styles.checkoutButton}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
