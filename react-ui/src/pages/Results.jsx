import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

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
        <h1 style={{textAlign: 'center'}}>Results!</h1>
        <SearchResultsDisplay />
      </div>
    );
  }
}

const connectedResults = connect(null, mapDispatchToProps)(Results);
const routedResults = withRouter(connectedResults);
export default routedResults;