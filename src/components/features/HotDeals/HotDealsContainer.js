import { connect } from 'react-redux';

import HotDeals from './HotDeals';

const mapStateToProps = state => ({
  hotdeals: state.hotdeals,
  hotdeals_slider: state.hotdeals_slider,
});

export default connect(mapStateToProps)(HotDeals);
