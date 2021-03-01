import { connect } from 'react-redux';
import CurrencyChange from './CurrencyChange';

import { getCurrency, setCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrency: (name, value) => dispatch(setCurrency(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChange);
