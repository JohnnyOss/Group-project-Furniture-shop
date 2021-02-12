import React from 'react';
import { shallow } from 'enzyme';
import PromotionBox from './PromotionBox';

describe('Component PromotionBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotionBox />);
    expect(component).toBeTruthy();
  });
});
