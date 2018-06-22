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
        {/* <form className="form-inline">
          <div className="row">
            <div className="col-xs-8 col-sm-10">

              <div className="form-group">
                <label className="sr-only" htmlFor="address">Address</label>
                <input type="text"
                  className="form-control input-lg"
                  id="address"
                  placeholder="London"
                  required />
              </div>

            </div>
            <div className="col-xs-4 col-sm-2">

              <button type="submit" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </button>

            </div>
          </div>
        </form> */}
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