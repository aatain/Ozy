import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from '../action/actions';

import Header from '../components/Header.jsx';
import Form from './login/Form.jsx';
import FacebookButton from './login/Facebook.jsx';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};

class Login extends Component {

  render() {
    return (
      <div className='Login'>
        <Header />
        <br /><Form submitLoginInfo={console.log('form in login')}/>
        <br /><FacebookButton />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);