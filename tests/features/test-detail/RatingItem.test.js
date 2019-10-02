import React from 'react';
import { shallow } from 'enzyme';
import { RatingItem } from '../../../src/features/test-detail/RatingItem';

describe('test-detail/RatingItem', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RatingItem {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-rating-item').length
    ).toBe(1);
  });
});
