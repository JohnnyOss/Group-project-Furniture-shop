import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getCompared, changeCompare } from '../../../redux/productsRedux';
import { currentRwdMode, setResponsiveMode } from '../../../redux/rwdModeRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getCompared: getCompared(state),
  changeCompare: changeCompare(state),
  setResponsiveMode: setResponsiveMode(state),
  currentRwdMode: currentRwdMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
