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
            <div className={'col-4'}>
              <div className={styles.heading}>
                <h3>HOT DEALS</h3>
                <div className={styles.dots}>
                  <ul>
                    <li>
                      <a href='#' />
                    </li>
                    <li>
                      <a href='#' />
                    </li>
                    <li>
                      <a href='#' />
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
            <div className={'col-8'}>
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
