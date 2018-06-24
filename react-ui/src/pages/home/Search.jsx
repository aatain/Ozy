import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventsByLatLng } from '../../modules/getEvents'

const mapStateToProps = (store) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchEventsByLatLng: (location) => {
      dispatch(fetchEventsByLatLng(location))
    }
  });
};

class Search extends Component {

  // componentDidMount(){
  // }

  render() {
    let locationInput = '';
    return (
      <div>
        <div className="container">
          <span>Enter a location</span>
          <br /><br /><input type="text" placeholder="Enter a location..." onChange={(e) => locationInput = e.target.value} />
          <button onClick={() => { this.props.fetchEventsByLatLng(locationInput) }}>Submit</button>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);