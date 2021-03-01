import React from 'react';
// import styles from './CurrencyChange.module.scss';
import PropTypes from 'prop-types';

class CurrencyChange extends React.Component {
  static propTypes = {
    currency: PropTypes.array,
    setCurrency: PropTypes.func,
  };

  state = {
    activeCurrency: 'USD',
  };

  setCurrency(name, value) {
    this.setState({ activeCurrency: name, value });
  }

  render() {
    const { currency } = this.props;
    return (
      <li>
        <a href='/#'>USD</a>
        <ul>
          {currency.map(currency => (
            <li name={currency.name} value={currency.value} key={currency.key}>
              {currency.name}
            </li>
          ))}
          <li>
            <a href='/#'>USD</a>
          </li>
          <li>
            <a href='/#'>PLN</a>
          </li>
          <li>
            <a href='/#'>EUR</a>
          </li>
        </ul>
      </li>
    );
  }
}

// CurrencyChange.propTypes = {
//   getCurrency: PropTypes.array,
//   handleChangeCurrency: PropTypes.func,
// };

export default CurrencyChange;
