import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
        <div>
          <h2>Twitter Stats Tracker</h2>
          <Link to="/chart"><li>Chart</li></Link>
          <Link to="/about"><li>About</li></Link>
          
      </div>
    );
  }
}

export default(App);