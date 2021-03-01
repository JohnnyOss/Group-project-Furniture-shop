import { connect } from 'react-redux';
import CurrencyChange from './CurrencyChange';

import { getCurrency, handleChangeCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

const mapDispatchToProps = dispatch => ({
  handleChangeCurrency: (name, value) => dispatch(handleChangeCurrency(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChange);
