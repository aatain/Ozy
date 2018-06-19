import React, {Component} from 'react';
import { connect } from 'react-redux';
import {eventActions} from '../../modules/getEvents'

const mapStateToProps = (store) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchEventsByLatLng :(location)=>{
      dispatch(eventActions.fetchEventsByLatLng(location))}
  });
};

class Search extends Component {

  // componentDidMount(){
  // }

  render () {
    let locationInput = '';
    return (
      <div className="container">
            <span>Enter a location</span>
            <br /><br /><input type="text" placeholder="Enter a location..." onChange={(e) => locationInput = e.target.value } />
            <button onClick={()=>{this.props.fetchEventsByLatLng(locationInput)}}>Submit</button>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);git