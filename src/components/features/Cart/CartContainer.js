import { connect } from 'react-redux';
import { getAll, getCount, addProduct } from '../../../redux/cartRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  productsInCart: getAll(state),
  numberOfProductsInCart: getCount(state),
  // products: state.cart.products,
});

const mapDispatchToProps = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
