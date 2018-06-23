import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './home/Search.jsx';

const mapStateToProps = (store) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};

class homePage extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <h1 style={{textAlign: 'center'}}>Welcome!</h1>
        <Search />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);