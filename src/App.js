import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    let list = this.props.data.map( (item, i) => (
      <div key={i}>{item}</div>
    )

    )
    return (
      <div>
        {list}
        <a href="/auth/instagram"><li>Login/Register</li></a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.guests
  };
}

export default connect(mapStateToProps)(App);