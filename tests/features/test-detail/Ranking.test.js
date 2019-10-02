import React from 'react';
import { shallow } from 'enzyme';
import { Ranking } from '../../../src/features/test-detail/Ranking';

describe('test-detail/Ranking', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Ranking {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-ranking').length
    ).toBe(1);
  });
});
