import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlusCircle, 
  faChartArea, 
  faEdit, 
  faExternalLinkAlt, 
  faEllipsisH, 
  faQuestionCircle, 
  faClock, faChartBar, 
  faCheckCircle, 
  faStar,
  faStarHalfAlt,
  faCalendarAlt,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export class MainCourse extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail: {}
    }
  }

  static propTypes = {
    testDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    axios({
      method: "GET",
      url: "https://5d948b9fa961920014e9350c.mockapi.io/api/maintest",
      data: null
    }).then(res=>{
      this.setState({
        detail: res.data[0]
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { detail } = this.state;
    const { tag } = detail;
    console.log(detail);
    return (
      <div className="test-detail-main-course">
        <div>
          <div className="title">
            <h1>{detail.title}</h1>
          </div>
          <div className="utility">
            <a href="" title="Add"><FontAwesomeIcon icon={faPlusCircle} className="icon-item"/></a>      
            <a href="" title="Data"><FontAwesomeIcon icon={faChartArea} className="icon-item"/></a>
            <a href="" title="Edit"><FontAwesomeIcon icon={faEdit} className="icon-item"/></a>
            <a href="" title="Share"><FontAwesomeIcon icon={faExternalLinkAlt} className="icon-item"/></a>
            <a href="" title="Option"><FontAwesomeIcon icon={faEllipsisH} className="icon-item"/></a>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>
        <div className="detail">
          <span style={{marginRight: "10px"}}>
            <FontAwesomeIcon icon={faQuestionCircle} color={"blue"} className="icon-item"/> {detail.numberOfQuestion} questions
          </span>
          <span style={{marginRight: "10px"}}>
            <FontAwesomeIcon icon={faClock} color={"blue"} className="icon-item"/> {detail.time} minutes
          </span>
          <span style={{marginRight: "10px"}}>
            <FontAwesomeIcon icon={faChartBar} color={"blue"}/> {detail.access} access
              <span className="avatar"></span> {detail.name}
            {this.showTick()}
          </span>                
          <span style={{marginRight: "10px"}}>
            {this.showStar()}
          </span>
          (2)
        </div>
        <div className="info">
          {this.showTag(tag)}
          <span className="date">
            <FontAwesomeIcon icon={faCalendarAlt} color={"blue"} style={{marginRight: "5px", verticalAlign: "-8%"}}/>
            {detail.createAt}
          </span>
        </div>
        <h4 style={{color: "#C4C4C4"}}>{detail.title}</h4>
        <button className="start">
          <FontAwesomeIcon icon={faPlay} style={{marginRight: "5px"}}/>
          Play Test
        </button>
      </div>
    );
  }

  showTick = () => {
    const { tick } = this.state.detail;
    if(tick){
      return <FontAwesomeIcon icon={faCheckCircle} color={"#3ACA75"} style={{margin: "0 10px 0 7px"}}/>;
    }
    else{
      return "";
    }
  }

  showStar = () => {
    const { star } = this.state.detail;
    let result = [];
    var i;
    for(i = 1; i<= Math.floor(star); i++){
      result.push(<FontAwesomeIcon icon={faStar} color={"gold"} key={i}/>);
    }
    if(Math.ceil(star) > Math.floor(star)){
      result.push(<FontAwesomeIcon icon={faStarHalfAlt} color={"gold"} key={i+1}/>);
    }
    return result;
  }

  showTag = (myarr = []) => {
    let result = '';
    result = myarr.map((value, key) => {
      return <div className="tag" key={key}>{value}</div>
    })
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
)(MainCourse);
