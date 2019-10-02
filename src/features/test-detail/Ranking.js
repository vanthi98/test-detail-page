import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import RankingItem from './RankingItem';
import axios from 'axios';

export class Ranking extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    axios({
      method: "GET",
      url: "https://5d948b9fa961920014e9350c.mockapi.io/api/ranking",
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
        <RankingItem
          rank={value.rank}
          accout={value.accout}
          name={value.name}
          score={value.score}
          avatar={value.avatar}
          key={key}
        />
      )
    })
    return (
      <div className="test-detail-ranking">
        <h1>Rank ({users.length})</h1>
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
)(Ranking);
