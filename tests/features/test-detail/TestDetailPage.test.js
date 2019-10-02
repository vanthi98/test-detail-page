import React from 'react';
import { shallow } from 'enzyme';
import { TestDetailPage } from '../../../src/features/test-detail/TestDetailPage';

describe('test-detail/TestDetailPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TestDetailPage {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-test-detail-page').length
    ).toBe(1);
  });
});
