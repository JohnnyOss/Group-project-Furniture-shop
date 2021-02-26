import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux';
import { getNew } from '../../../redux/productsRedux';
import { getCompared, changeCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getCompared: getCompared(state),
  changeCompare: changeCompare(state),
  currentRwdMode: state.rwd.mode,
});

const mapDispatchToProps = dispatch => ({
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
