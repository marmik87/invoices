import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import SeznamFaktur from './components/SeznamFaktur';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Seznam faktur</h1>
        </header>
        <Login />
        <SeznamFaktur />
      </div>
    );
  }
}

export default App;
