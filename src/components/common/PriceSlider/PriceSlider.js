import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import styles from './PriceSlider.module.scss';

function valuetext(value) {
  return `$${value}`;
}

const PriceSlider = ({
  products, 
  category, 
  getProductByPrice, 
  setCategoryProducts, 
  setPriceValuesTo, 
  setPriceValuesFrom
}) => {
  const [value, setValue] = useState([135, 500]);

  const handlePriceTo = event => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (event.target.value.length === 0) {
      setTimeout(() => {
        setPriceValuesTo(Math.max(...getProductByPrice));
      }, 500);
    }
    if (event.target.value.length !== 0){
      event.presist();
      setTimeout(() => {
        setPriceValuesTo(parseInt(event.target.value));
      }, 500);
    }
  };

  const handlePriceFrom = event => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (event.target.value.length === 0) {
      setTimeout(() => {
        setPriceValuesFrom(0);
      }, 500);
    }
    if (event.target.value.length !== 0) {
      event.presist();
      setTimeout(() => {
        setPriceValuesTo(parseInt(event.target.value));
      }, 500);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <Slider
        className={styles.box}
        value={value}
        min={0}
        max={1000}
        step={1}
        onChange={handleChange}
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
      />
      <div className={styles.inputBox}>
        <input type='submit' value='FILTER' className={styles.inputBox__button} />
        <div className={styles.inputBox__price}>
          <span>${value[0]} - </span>
          <span>${value[1]}</span>
        </div>
      </div>
    </div>
  );
};

PriceSlider.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  setCategoryProducts: PropTypes.func,
  setPriceValuesTo: PropTypes.func,
  setPriceValuesFrom: PropTypes.func,
};

export default PriceSlider;
