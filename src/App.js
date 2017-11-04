import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.list)
    return (
      <div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps)(App);