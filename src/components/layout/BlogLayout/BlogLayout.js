import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faCalendarAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

const BlogLayout = (/*{ children }*/) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row' + ' ' + styles.row__blog}>
        <div className={styles.articles__container}>
          <div className={styles.articles__item}>
            <h2 className={styles.articles__item_title}>
              Witamy na nowej stronie sklepu
            </h2>
            <img
              className={styles.articles__item_image}
              src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-montanah-1350789.jpg&fm=jpg'
              alt=''
            ></img>
            <p className={styles.articles__item_text}>
              Lorem ipsum sed felis. Integer eu lectus. Nam libero ante, cursus ut,
              metus. Curabitur ornare dapibus. Aenean augue eget leo facilisis vel,
              hendrerit wisi. Sed sed turpis. Donec sollicitudin mi. Aliquam nisl. Nulla
              lobortis semper. Praesent quis orci. Vestibulum ante imperdiet nec,
              hendrerit nonummy. Nam sit amet, consectetuer vulputate at, elit.
            </p>
            <hr />
            <div className={styles.articles__item_footer}>
              <div>
                <FontAwesomeIcon icon={faUserEdit} />
                <span>Author</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>18.02.2021</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faFolder} />
                <span>Category 1</span>
              </div>
              <div>Read more...</div>
            </div>
            <hr />
          </div>
          <div className={styles.articles__item}>
            <h2 className={styles.articles__item_title}>Title of Post 2</h2>
            <img
              className={styles.articles__item_image}
              src='https://placeimg.com/640/300/2'
              alt=''
            ></img>
            <p className={styles.articles__item_text}>
              Lorem ipsum sed felis. Integer eu lectus. Nam libero ante, cursus ut,
              metus. Curabitur ornare dapibus. Aenean augue eget leo facilisis vel,
              hendrerit wisi. Sed sed turpis. Donec sollicitudin mi. Aliquam nisl. Nulla
              lobortis semper. Praesent quis orci. Vestibulum ante imperdiet nec,
              hendrerit nonummy. Nam sit amet, consectetuer vulputate at, elit.
            </p>
            <hr />
            <div className={styles.articles__item_footer}>
              <div>
                <FontAwesomeIcon icon={faUserEdit} />
                <span>Author</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>18.02.2021</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faFolder} />
                <span>Category 1</span>
              </div>
              <div>Read more...</div>
            </div>
            <hr />
          </div>
        </div>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__search}>
            <input placeholder='Search...' />
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

BlogLayout.propTypes = {
  // children: PropTypes.node,
};

export default BlogLayout;
