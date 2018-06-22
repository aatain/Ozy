import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Events from "./Events.jsx";

const mapStateToProps = (store) => {
  return {
    events: store.eventReducer.events,
    location: store.eventReducer.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};

class SearchResultsDisplay extends Component {

  render() {
    let eventArr = [];
    for (let i = 0; i < this.props.events.length; i++) {
      eventArr.push(<Events key={i} event={this.props.events[i]} />);
    }

    return (
      <div className="displayBox">
        <h4 style={{ textAlign: 'center' }}>Events in This {}}</h4>
        {eventArr}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsDisplay);