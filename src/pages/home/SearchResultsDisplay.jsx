import React, { Component } from 'react';
import { connect } from 'react-redux';

import Events from "./Events.jsx";

const mapStateToProps = store => {
};

const mapDispatchToProps = dispatch => { 
}

class SearchResultsDisplay extends Component {

  render() {
    let events = [];
    for(let i = 0; i < 5; i++){
      events.push(<Events key={i} eventItem={'g'}/>);
    }
    
    return(
    <div className="displayBox">
      <h4>Events in This Area</h4>
      {events}
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsDisplay);