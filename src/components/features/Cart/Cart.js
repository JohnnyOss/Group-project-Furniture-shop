import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Button from '../../common/Button/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faMinusSquare,
  faPlusSquare,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

const Cart = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col-6 col-md-6 text-left ${styles.cart}`}>
          <p>Cart</p>
        </div>
        <div className={`col-6 col-md-6 text-right ${styles.iconBox}`}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
          <p> Cart</p>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='cart-form'>
          <div className='cart-head'>
            <div className='product-remove'></div>
            <div className='product-photo'></div>
            <div className='product-name'>PRODUCT</div>
            <div className='product-price'>PRICE</div>
            <div className='product-quantity'>QUANTITY</div>
            <div className='product-subtotal'>SUBTOTAL</div>
          </div>
          <div className='cart-body'>
            <div className='cart-item'>
              <div className='product-remove'>
                <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
              </div>
              <div className='product-photo'>
                <a href='img'></a>
              </div>
              <div className='product-name'>Product nr 5</div>
              <div className='product-price'>
                <div className='price-amount'>
                  <span className='price-currency-symbol'>$</span>
                  85.00
                </div>
              </div>
              <div className='product-quantity'>
                <div className='input-group plus-minus-input'>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='minus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} />
                    </button>
                  </div>
                  <input
                    className='input-group-field'
                    type='number'
                    name='quantity'
                    value='0'
                  ></input>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='plus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faPlusSquare} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='product-subtotal'></div>
              <div className='subtotal-amount'>
                <span className='price-currency-symbol'>$</span>
                85.00
              </div>
            </div>
            <div className='cart-item'>
              <div className='product-remove'>
                <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
              </div>
              <div className='product-photo'>
                <a href='img'></a>
              </div>
              <div className='product-name'>Product nr 1</div>
              <div className='product-price'>
                <div className='price-amount'>
                  <span className='price-currency-symbol'>$</span>
                  30.00
                </div>
              </div>
              <div className='product-quantity'>
                <div className='input-group plus-minus-input'>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='minus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} />
                    </button>
                  </div>
                  <input
                    className='input-group-field'
                    type='number'
                    name='quantity'
                    value='0'
                  ></input>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='plus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faPlusSquare} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='product-subtotal'></div>
              <div className='subtotal-amount'>
                <span className='price-currency-symbol'>$</span>
                30.00
              </div>
            </div>
            <div className='cart-item'>
              <div className='product-remove'>
                <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
              </div>
              <div className='product-photo'>
                <a href='img'></a>
              </div>
              <div className='product-name'>Product nr 9</div>
              <div className='product-price'>
                <div className='price-amount'>
                  <span className='price-currency-symbol'>$</span>
                  55.00
                </div>
              </div>
              <div className='product-quantity'>
                <div className='input-group plus-minus-input'>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='minus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} />
                    </button>
                  </div>
                  <input
                    className='input-group-field'
                    type='number'
                    name='quantity'
                    value='0'
                  ></input>
                  <div className='input-group-button'>
                    <button
                      type='button'
                      className='button hollow circle'
                      data-quantity='plus'
                      data-field='quantity'
                    >
                      <FontAwesomeIcon className={styles.icon} icon={faPlusSquare} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='product-subtotal'></div>
              <div className='subtotal-amount'>
                <span className='price-currency-symbol'>$</span>
                55.00
              </div>
            </div>
          </div>
          <td colSpan='6' className='action'>
            <div className='coupon'>
              <label htmlFor='coupon-code'></label>
              <input
                type='text'
                className='input-text'
                placeholder='Coupon code'
              ></input>
              <button type='submit' className='button' value='Apply coupon'>
                Apply coupon
              </button>
            </div>
          </td>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
