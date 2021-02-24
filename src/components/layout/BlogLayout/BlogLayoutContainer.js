import { connect } from 'react-redux';
import { getBlogArticles } from '../../../redux/blogRedux.js';
import BlogLayout from './BlogLayout';

const mapStateToProps = state => ({
  articles: getBlogArticles(state),
});

export default connect(mapStateToProps)(BlogLayout);
