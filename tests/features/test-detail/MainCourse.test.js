import React from 'react';
import { shallow } from 'enzyme';
import { MainCourse } from '../../../src/features/test-detail/MainCourse';

describe('test-detail/MainCourse', () => {
  it('renders node with correct class name', () => {
    const props = {
      testDetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MainCourse {...props} />
    );

    expect(
      renderedComponent.find('.test-detail-main-course').length
    ).toBe(1);
  });
});
