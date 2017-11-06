import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    
    return (
        <div className="app-wrapper">
          <div className="app-container">
            <h1>Twitter Stats Tracker</h1>
            <Link className="link" to="/chart"><li>Chart</li></Link>
            <Link className="link" to="/about"><li>About</li></Link>
          </div>
          
      </div>
    );
  }
}

export default(App);