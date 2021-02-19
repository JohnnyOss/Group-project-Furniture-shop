import { formatWithCursor } from 'prettier';
import { connect } from 'react-redux';
import HotDeals from './HotDeals';
import { getHotDeals } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getHotDeals(state),
  hotdeals_slider: state.hotdeals_slider,
});

export default connect(mapStateToProps)(HotDeals);
