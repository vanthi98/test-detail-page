import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import RatingItem from './RatingItem';
import axios from 'axios';

export class Rating extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    axios({
      method: "GET",
      url: "https://5d948b9fa961920014e9350c.mockapi.io/api/rating",
      data: null
    }).then(res=>{
      this.setState({
        users: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    let { users } = this.state;
    let result = users.map((value, key) => {
      return(
        <RatingItem
          accout={value.accout}
          avatar={value.avatar}
          time={value.time}
          comment={value.comment}
          star={value.star}
          key={key}
        />
      )
    })
    return (
      <div className="test-detail-rating">
        <h1>Ratings ({users.length})</h1>
        {result}
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
)(Rating);
