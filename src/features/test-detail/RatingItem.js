import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export class RatingItem extends Component {
  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { time, comment, accout } = this.props;
    return (
      <div className="user">
          {this.showAvatar()}
          <div className="info">
            <span className="accout-name" style={{lineHeight: "25px"}}>{accout}</span>
            <span style={{marginLeft: "10px"}}>
              {this.showStar()}
            </span><br />
            <div className="comment">{comment}</div>
          </div>
          <div className="time">
            {time}
          </div>
        </div>
    );
  }

  showAvatar = () => {
    const { avatar, accout } = this.props;
    const altavatar = accout.slice(0,1).toUpperCase();
    if(!avatar.includes(".")){
      return <div className="avatar" style={{backgroundColor: `${avatar}`}}>{altavatar}</div>
    }
    else{
      return <div className="avatar"
          style={{
            backgroundImage: `url(${require('../../images/'+avatar)})`,        
            backgroundSize: "cover"       
          }}
        ></div>
    }
  }

  showStar = () => {
    const { star } = this.props;
    let result = [];
    for(let i = 1; i <= star; i++){
      result.push(<FontAwesomeIcon icon={faStar} color={"gold"} key={i}/>)
    }
    return result;
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
)(RatingItem);
