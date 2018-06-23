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
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchEventsByLatLng(this.state.value)
  }

  render() {
    return (
        <form className="container form-group row" onSubmit={this.handleSubmit}>
        <label className='col-form-label col-sm-2'>Enter a location:
          <input type="text" className='form-control' placeholder="" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='col-sm-2' type="submit" value="Submit" />
        </form>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);