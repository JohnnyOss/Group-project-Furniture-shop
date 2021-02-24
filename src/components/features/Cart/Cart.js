import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  // faMinus,
  // faPlus,
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
                <th scope='col' className={styles.item1}>
                  &nbsp;
                </th>
                <th scope='col' className={styles.item2}>
                  &nbsp;
                </th>
                <th scope='col' className={styles.item3}>
                  Product
                </th>
                <th scope='col' className={styles.item4}>
                  Price
                </th>
                <th scope='col' className={styles.item5}>
                  Quantity
                </th>
                <th scope='col' className={styles.item6}>
                  Total
                </th>
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
                  <img
                    className={styles.productImage}
                    src={
                      'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=pexels-paula-schmidt-963486.jpg&fm=jpg'
                    }
                    alt=''
                  ></img>
                </td>
                <td>Product nr 9</td>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
                </td>
                <td className={styles.quantity}>
                  <Button variant='product' className={styles.buttonQty}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <input className={styles.inputNumber} type='number' min='0'></input>
                  <Button variant='product' className={styles.buttonQty}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </td>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
                </td>
              </tr>
              <tr className={styles.theadItem}>
                <th scope='row'>
                  <Button className={styles.productRemover}>
                    <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                  </Button>
                </th>
                <td>
                  <img
                    className={styles.productImage}
                    src={
                      'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=pexels-paula-schmidt-963486.jpg&fm=jpg'
                    }
                    alt=''
                  ></img>
                </td>
                <td>Product nr 9</td>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
                </td>
                <td className={styles.quantity}>
                  <Button variant='product' className={styles.buttonQty}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <input className={styles.inputNumber} type='number' min='0'></input>
                  <Button variant='product' className={styles.buttonQty}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </td>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
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
          <Button variant='small' className={styles.button2}>
            Update cart
          </Button>
        </div>
        <div className={`table ${styles.table}`}>
          <table className={`col ${styles.tableTotal}`}>
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
                  <span className='price-currency-symbol'>$ </span>0
                </td>
              </tr>
              <tr className={styles.theadItem}>
                <th scope='col'>Total</th>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
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
