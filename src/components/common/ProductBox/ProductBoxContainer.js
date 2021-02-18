import { connect } from 'react-redux';

import ProductBox from './ProductBox';
import { getAll, addFavourite, removeFavourite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: product => dispatch(addFavourite(product)),
  removeFavourite: product => dispatch(removeFavourite(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
