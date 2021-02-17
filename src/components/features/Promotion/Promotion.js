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
            <div className='col-xs-12 col-md-6'>
              <div className={styles.image}>
                <img src={promotion[0].image} alt={promotion[1].id} />
                <div className={styles.text}>
                  <p>{promotion[0].text1}</p>
                  <p>{promotion[0].text2}</p>
                  <p>{promotion[0].text3}</p>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-6'></div>
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
