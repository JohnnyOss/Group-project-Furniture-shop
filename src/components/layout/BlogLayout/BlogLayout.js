import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BlogLayout.module.scss';

const BlogLayout = (/*{ children }*/) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row' + ' ' + styles.row__blog}>
        <div className={styles.articles__container}>
          <div className={styles.articles__item}>
            <h2 className={styles.articles__item_title}>Title of Post 1</h2>
            <img
              className={styles.articles__item_image}
              src='https://placeimg.com/640/300/any'
              alt=''
            ></img>
            <p className={styles.articles__item_text}>
              Lorem ipsum sed felis. Integer eu lectus. Nam libero ante, cursus ut,
              metus. Curabitur ornare dapibus. Aenean augue eget leo facilisis vel,
              hendrerit wisi. Sed sed turpis. Donec sollicitudin mi. Aliquam nisl. Nulla
              lobortis semper. Praesent quis orci. Vestibulum ante imperdiet nec,
              hendrerit nonummy. Nam sit amet, consectetuer vulputate at, elit.
            </p>
            <div className={styles.articles__item_footer}>
              <div>Author</div>
              <div>18.02.2021</div>
              <div>Read more...</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__search}>Search</div>
          <div className={styles.sidebar__posts}>Recent Post</div>
          <div className={styles.sidebar__comments}>Recent Comments</div>
          <div className={styles.sidebar__archives}>Archives</div>
          <div className={styles.sidebar__categories}>Categories</div>
        </div>
      </div>
    </div>
  </div>
);

BlogLayout.propTypes = {
  // children: PropTypes.node,
};

export default BlogLayout;
