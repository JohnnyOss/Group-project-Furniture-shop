import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';

class Promotion extends React.Component {
  render() {
    const { promotion } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.box} col-xs-12 col-md-6`}>
              <div className={styles.imageLeft}>
                <div className={styles.wrapper}>
                  <img src={promotion[0].image} alt={promotion[0].id} />
                </div>
                <div className={styles.text1}>
                  <p className={styles.part1}>{promotion[0].text1}</p>
                  <p>{promotion[0].text2}</p>
                  <p className={styles.part3}>{promotion[0].text3}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box} col-xs-12 col-md-6`}>
              <div className={styles.imageRight}>
                <img src={promotion[1].image} alt={promotion[1].id} />
                <div className={styles.text2}>
                  <p>
                    <span className={styles.part1}>{promotion[1].text1}</span>
                    <span className={styles.part2}>{promotion[1].text2}</span>
                  </p>
                  <p className={styles.part3}>{promotion[1].text3}</p>
                  <p className={styles.part4}>{promotion[1].text4}</p>
                </div>
              </div>
              <div className={`${styles.imageRight} ${styles.imageBottom}`}>
                <img src={promotion[2].image} alt={promotion[2].id} />
                <div className={styles.text3}>
                  <p>
                    <span className={styles.part1}>{promotion[2].text1}</span>
                    <span className={styles.part2}>{promotion[2].text2}</span>
                  </p>
                  <p className={styles.part3}>{promotion[2].text3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotion.propTypes = {
  promotion: PropTypes.arrayOf(
    PropTypes.shape({
      text1: PropTypes.string,
      text2: PropTypes.string,
      text3: PropTypes.string,
      text4: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
Promotion.defaultProps = {
  promotion: [],
};

export default Promotion;
