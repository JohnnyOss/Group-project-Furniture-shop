import { formatWithCursor } from 'prettier';
import { connect } from 'react-redux';
import HotDeals from './HotDeals';
import { getHotDeals, getHotDeals_slider } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getHotDeals(state),
  hotdeals_slider: getHotDeals_slider(state),
});

export default connect(mapStateToProps)(HotDeals);
