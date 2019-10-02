import React from 'react';
import { shallow } from 'enzyme';
import { RankingItem } from '../../../src/features/test-detail/RankingItem';

describe('test-detail/RankingItem', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RankingItem {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-ranking-item').length
    ).toBe(1);
  });
});
