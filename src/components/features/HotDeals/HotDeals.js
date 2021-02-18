import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
import HotDealsCarousel from '../../common/HotDealsCarousel/HotDealsCarousel';

class HotDeals extends React.Component {
  state = {
    activeProduct_Carousel: 0,
    activeProduct_Box: 0,
  };

  componentDidMount() {
    this.carousel();
  }

  carousel = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        prevProduct: prevState.activeProduct_Carousel,
        activeProduct_Carousel:
          prevState.activeProduct_Carousel === this.props.products.length - 1
            ? 0
            : ++prevState.activeProduct_Carousel,
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
    this.setState({ activeProduct_Carousel: newPage });
  }

  render() {
    const { products, hotdeals_slider } = this.props;
    const { activeProduct_Carousel, activeProduct_Box } = this.state;

    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={dots}>
          <a
            onClick={() => this.handleProductChange(i)}
            className={i === activeProduct_Carousel && styles.active}
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
              {products
                .slice(activeProduct_Carousel, activeProduct_Carousel + 1)
                .map(item => (
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
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
