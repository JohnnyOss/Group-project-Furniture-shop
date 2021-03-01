import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './CurrencyChange.module.scss';
import PropTypes from 'prop-types';

class CurrencyChange extends React.Component {
  static propTypes = {
    getCurrency: PropTypes.array,
    handleChangeCurrency: PropTypes.func,
  };

  state = {
    activeCurrency: 'USD',
  };

  handleChangeCurrency(name, value) {
    this.setState({ activeCurrency: name, value });
  }

  render() {
    //const {value} = this.props;

    return <div></div>;
  }
}

// CurrencyChange.propTypes = {
//   getCurrency: PropTypes.array,
//   handleChangeCurrency: PropTypes.func,
// };

export default CurrencyChange;
