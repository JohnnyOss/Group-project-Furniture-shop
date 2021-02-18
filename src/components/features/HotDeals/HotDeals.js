import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
import HotDealsCarousel from '../../common/HotDealsCarousel/HotDealsCarousel';

class HotDeals extends React.Component {
  render() {
    const { hotdeals, hotdeals_slider } = this.props;
    return (
      <div className={styles.root}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={`col-xl-4 col-lg-4 col-md-5 col-sm-4 ${styles.box}`}>
              <div className={styles.heading}>
                <h3>HOT DEALS</h3>
                <div className={styles.dots}>
                  <ul>
                    <li>
                      <a href='/#'>{null}</a>
                    </li>
                    <li>
                      <a href='/#'>{null}</a>
                    </li>
                    <li>
                      <a href='/#'>{null}</a>
                    </li>
                  </ul>
                </div>
              </div>
              {hotdeals.map(item => (
                <div key={item.id}>
                  <HotDealsBox {...item} />
                </div>
              ))}
            </div>
            <div
              className={`col-xl-8 col-lg-8 col-md-7 col-sm-8 col-12 ${styles.carouselBox}`}
            >
              {hotdeals_slider.map(item => (
                <div key={item.id}>
                  <HotDealsCarousel {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotDeals.propTypes = {
  children: PropTypes.node,
  hotdeals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
    })
  ),
  hotdeals_slider: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

HotDeals.defaultProps = {
  hotdeals: [],
  hotdeals_slider: [],
};

export default HotDeals;
