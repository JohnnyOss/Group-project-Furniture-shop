import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

class BlogLayout extends React.Component {
  render() {
    const { articles } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.row__blog}>
            <div className={styles.articles__container}>
              {articles.map(item => (
                <div key={item.id} className={styles.articles__item}>
                  <h2 className={styles.articles__item_title}>{item.title}</h2>
                  <img
                    className={styles.articles__item_image}
                    src={item.image}
                    alt=''
                  ></img>
                  <p className={styles.articles__item_text}>{item.text}</p>
                  <hr />
                  <div className={styles.articles__item_footer}>
                    <div>
                      <FontAwesomeIcon icon={faUserEdit} />
                      <span>{item.author}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{item.data}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faFolder} />
                      <span>{item.category}</span>
                    </div>
                    <div>Read more...</div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            <div className={styles.sidebar__container}>
              <div className={styles.sidebar__search}>
                <input placeholder='Search in blog...' />
              </div>
              <div className={styles.sidebar__posts}>
                <h5>Recent Post</h5>
                <ul>
                  <li>Post 6</li>
                  <li>Post 5</li>
                  <li>Post 4</li>
                  <li>Post 3</li>
                </ul>
              </div>
              <div className={styles.sidebar__comments}>
                <h5>Recent Comments</h5>
                <ul>
                  <li>User XYZ</li>
                  <li>User abc</li>
                </ul>
              </div>
              <div className={styles.sidebar__archives}>
                <h5>Archives</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>January 2021</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>December 2020</span>
                  </li>
                </ul>
              </div>
              <div className={styles.sidebar__categories}>
                <h5>Categories</h5>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Catgeory 1</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Category 2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogLayout.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      author: PropTypes.string,
      data: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

export default BlogLayout;
