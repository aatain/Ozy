import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from '../action/actions';

import Header from '../components/Header.jsx';
import SearchResultsDisplay from './results/SearchResultsDisplay.jsx';

// const mapStateToProps = (store) => {
//   return {
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};

class Results extends Component {

  render() {
    return (
      <div className='Results'>
        <Header />
        <h1 style={{textAlign: 'center'}}>Results!</h1>
        <SearchResultsDisplay />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Results);