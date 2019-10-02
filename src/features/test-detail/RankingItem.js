import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export class RankingItem extends Component {
  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { score } = this.props;
    return (
      <div className="user">
          {this.showMedal()}
          {this.showAvatar()}
          <div className="info">
            {this.showInfo()}
          </div>
          <div className="marks">
            <font style={{color: 'red'}}>{score} </font>/ 10
          </div>
      </div>
    );
  }

  showMedal = () => {
    const { rank } = this.props;
    const color = rank === 1 ? "gold" : rank === 2 ? "silver" : "#cd7f32";
    if(rank <= 3){
      return <FontAwesomeIcon icon={faMedal} className="user-ranking" color={color}/>
    }
    else{
      return <span className="user-ranking" style={{fontSize: "15px", color: "#1D86E0", left: "13px"}}>{rank}</span>;
    }
  }

  showInfo = () => {
    const { accout, name } = this.props;
    if(name === ""){
      return (<Fragment><span className="accout-name" style={{lineHeight: "50px"}}>{accout}</span><br /></Fragment>)
    }
    else{
      return (
        <Fragment>
          <span className="accout-name" style={{lineHeight: "25px"}}>{accout}</span><br />
          <span className="user-name" style={{lineHeight: "25px"}}>{name}</span>
        </Fragment>
      )
    }
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
)(RankingItem);
