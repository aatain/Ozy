import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header.jsx';
import Search from './home/Search.jsx';
import SearchResultsDisplay from './home/SearchResultsDisplay.jsx';

const mapStateToProps = (store) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};


class homePage extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    console.log('innn component did mount')
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log('hiiiiiiiiiiii')
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Header />
        <h1 style={{textAlign: 'center'}}>Welcome!</h1>
        <Search />
        <SearchResultsDisplay />
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);