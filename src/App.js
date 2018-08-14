import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';

import Upload from './components/Upload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand>
            <a href="/">Election Leaflets</a>
          </Navbar.Brand>
        </Navbar>
        <Upload />
      </div>
    );
  }
}

export default App;
