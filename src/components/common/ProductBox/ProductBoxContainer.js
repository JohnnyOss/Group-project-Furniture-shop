import { connect } from 'react-redux';

import ProductBox from './ProductBox';
import { getAll, toggleFavourite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavourite: product => dispatch(toggleFavourite(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
