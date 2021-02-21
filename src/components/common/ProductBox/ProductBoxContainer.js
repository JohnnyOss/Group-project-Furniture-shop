import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { addProduct, getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: value => dispatch(addProduct(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
