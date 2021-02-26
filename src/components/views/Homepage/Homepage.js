import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import HotDeals from '../../features/HotDeals/HotDealsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Promotion from '../../features/Promotion/PromotionContainer';

const Homepage = () => (
  <div className={styles.root}>
    <HotDeals />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture itemsPerSlide={8} />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;
