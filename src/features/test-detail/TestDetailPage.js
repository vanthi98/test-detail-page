import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import MainCourse from './MainCourse';
import Ranking from './Ranking';
import Rating from './Rating';

export class TestDetailPage extends Component {
  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="test-detail-page">
        <h1>Test Detail Page</h1>
        <div className="container">
          <MainCourse />
          <Ranking />
          <Rating />
          <div style={{clear: "both"}}></div>
        </div>        
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    testDetail: state.testDetail,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestDetailPage);
