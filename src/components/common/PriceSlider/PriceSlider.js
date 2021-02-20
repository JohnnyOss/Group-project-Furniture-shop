import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import styles from './PriceSlider.module.scss';

function valuetext(value) {
  return `$${value}`;
}

const PriceSlider = props => {
  let minValue = 135;
  let maxValue = 500;
  const [value, setValue] = useState([minValue, maxValue]);

  console.log('valueMin', value[0]);
  console.log('valueMax', value[1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const valueMin = (index, value) => {

  // }

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000) {
      setValue(1000);
    }
  };

  return (
    <div>
      <Slider
        className={styles.box}
        value={value}
        min={0}
        max={1000}
        step={1}
        // defaultValue={[135, 500]}
        onChange={handleChange}
        // valueLabelDisplay="auto"
        aria-labelledby='range-slider'
        // getAriaLabel = {valueThumb}
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

export default PriceSlider;
