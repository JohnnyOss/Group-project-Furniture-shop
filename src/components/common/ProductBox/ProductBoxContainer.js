import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { addProduct, getCount } from '../../../redux/cartRedux';
import { getAll, getQuickView, setFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: value => dispatch(addProduct(value)),
  setFavourite: (id, isFavourite) => dispatch(setFavourite({ id, isFavourite })),
  getQuickView: value => dispatch(getQuickView(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
