import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from '../../../src/features/test-detail/Rating';

describe('test-detail/Rating', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Rating {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-rating').length
    ).toBe(1);
  });
});
