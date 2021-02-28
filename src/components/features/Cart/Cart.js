import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  // faMinus,
  // faPlus,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

class Cart extends React.Component {
  render() {
    const {
      productsInCart,
      numberOfProductsInCart,
      changeAmount,
      removeProduct,
      setValue,
    } = this.props;
    console.log('productsInCart', productsInCart);
    console.log('numberOfProductsInCart', numberOfProductsInCart);
    console.log('this.props', this.props);

    const removeFromCart = id => {
      removeProduct({ id });
    };

    const changeQuantity = (id, type) => {
      changeAmount({ id, type });
    };

    // (product.quantity === undefined || product.quantity < 0) ? 1 : product.quantity;

    const finalAmount = product => {
      if (product.quantity === undefined) {
        return 1;
      } else if (product.quantity < 0) {
        return 0;
      } else {
        return product.quantity;
      }
    };
    // product.quantity === undefined ? 1*product.price : product.quantity*product.price

    const finalPrice = product => {
      if (product.quantity === undefined) {
        return product.price;
      } else if (product.quantity < 0) {
        return 0;
      } else {
        return product.quantity * product.price;
      }
    };

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
                {productsInCart.map(product => (
                  <tr key={product.id} className={styles.theadItem}>
                    <th scope='row'>
                      <Button
                        className={styles.productRemover}
                        onClick={() => removeFromCart(product.id)}
                      >
                        <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                      </Button>
                    </th>
                    <td>
                      <img
                        className={styles.productImage}
                        src={product.image}
                        alt=''
                      ></img>
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <span className='price-currency-symbol'>$ </span>
                      {product.price}
                    </td>
                    <td className={styles.quantity}>
                      <Button
                        variant='product'
                        className={styles.buttonQty}
                        onClick={() => changeQuantity(product.id, 'decrease')}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <input
                        className={styles.inputNumber}
                        type='text'
                        min='0'
                        value={finalAmount(product)}
                        onChange={event => setValue(event.currentTarget.value)}
                      />
                      {/* <span>{product.quantity === undefined ? 1 : product.quantity}</span> */}
                      <Button
                        variant='product'
                        className={styles.buttonQty}
                        onClick={() => changeQuantity(product.id, 'increase')}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </td>
                    <td>
                      <span className='price-currency-symbol'>$ </span>
                      {finalPrice(product)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.buttons}>
            <label htmlFor='coupon-code'></label>
            <input
              type='text'
              placeholder='Coupon code'
              className={styles.input}
            ></input>
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
  }
}

Cart.propTypes = {
  numberOfProductsInCart: PropTypes.number,
  productsInCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favourite: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
  changeAmount: PropTypes.func,
  removeProduct: PropTypes.func,
  setValue: PropTypes.func,
};

export default Cart;
