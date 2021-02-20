import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
import HotDealsCarousel from '../../common/HotDealsCarousel/HotDealsCarousel';

class HotDeals extends React.Component {
  state = {
    activeCarousel: 0,
    activeSlider: 0,
  };

  componentDidMount() {
    this.carousel();
  }

  carousel = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        prevProduct: prevState.activeCarousel,
        activeCarousel:
          prevState.activeCarousel === this.props.products.length - 1
            ? 0
            : ++prevState.activeCarousel,
      }));
    }, 3000);
  };

  stopCarousel = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleProductChange(newPage) {
    this.stopCarousel();
    this.timeoutId = setTimeout(() => {
      this.carousel();
      clearTimeout(this.timeoutId);
    }, 8000);
    this.setState({ activeCarousel: newPage });
  }

  handleSliderChange(event, value) {
    event.preventDefault();

    if (this.state.activeSlider === 0 && value === -1) {
      this.setState({ activeSlider: 2 });
    } else if (this.state.activeSlider === 2 && value === 1) {
      this.setState({ activeSlider: 0 });
    } else if (value === 1) {
      this.setState({ activeSlider: this.state.activeSlider + 1 });
    } else if (value === -1) {
      this.setState({ activeSlider: this.state.activeSlider - 1 });
    }
  }

  render() {
    const { products, hotdeals_slider } = this.props;
    const { activeCarousel, activeSlider } = this.state;

    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={dots}>
          <a
            onClick={() => this.handleProductChange(i)}
            className={i === activeCarousel ? styles.active : ''}
          ></a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={`col-xl-4 col-lg-4 col-md-5 col-sm-4 ${styles.box}`}>
              <div className={styles.heading}>
                <h3>HOT DEALS</h3>
                <div className={styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <div className={'row'}>
                {products.slice(activeCarousel, activeCarousel + 1).map(item => (
                  <div key={item.id} className='col-12'>
                    <HotDealsBox {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`col-xl-8 col-lg-8 col-md-7 col-sm-8 col-12 ${styles.carouselBox}`}
            >
              {hotdeals_slider.slice(activeSlider, activeSlider + 1).map(item => (
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      //category: PropTypes.string,
      //price: PropTypes.number,
      //stars: PropTypes.number,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
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
  products: [],
  hotdeals_slider: [],
};

export default HotDeals;
