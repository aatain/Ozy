import React, { Component } from 'react';
import tourist from '../assets/tourist.svg';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={tourist} className="App-logo" alt="logo" />
          <h1 className="App-title">Ozy</h1>
        </header>
    );
  }
}

export default Header;