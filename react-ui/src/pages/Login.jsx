import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLoginInfo } from '../modules/userModule'

import Form from './signin/Form.jsx';
import FacebookButton from './signin/FacebookButton.jsx';

const mapDispatchToProps = (dispatch) => {
  return ({
    submitLoginInfo: (location) => {
      dispatch(submitLoginInfo(location))
    }
  });
};

class Login extends Component {

  render() {
    return (
      <div className='SignIn container-fluid text-center col-7'>
        <br /><br /><br /><br /><h1 className="h3 mb-3 font-weight-normal">Let's get started :-)</h1>
        <Form submitLoginInfo={this.props.submitLoginInfo} />
        <br /><br /><FacebookButton />
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
