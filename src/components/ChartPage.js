import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Chart from './Chart';
import {getTwitterData} from './../ducks/reducer';

class ChartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: [],
        loggedIn: false,
    }
    this.showStats = this.showStats.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:8080/api/user')
    .then((response)=>{
      this.setState({user: response.data, loggedIn: true})
    })
    .catch(err=>{console.log('error', err)})
  }

  showStats(){
    this.props.getTwitterData(this.state.user)
  }

  render() {
    console.log(this.state.user);
    console.log(this.props.followers)
    if(!this.state.loggedIn){
      return (
        <div>
          <br/>
          <a href='http://localhost:8080/auth/twitter'>
            <button className='button'>
              Log in to Twitter
            </button>
          </a>
        </div>
      );
    }
    if(!this.props.showChart){
      return (
        <div>
          <br/>
          <h2>Welcome {this.state.user}!</h2>
          <br/>
          <br/>
          <button className='button' onClick={this.showStats}>
            Show me my Twitter Stats
          </button>
        </div>
      );
    }
    return (
      <div>
        <br/>
        <h2>Welcome {this.state.user}!</h2>
        {this.props.showChart ? 
          <Chart  
                followers={this.props.followers}
                friends={this.props.friends}
                statuses={this.props.statuses}
        />
        :
        null
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    test: state.test,
    followers: state.followers,
    friends: state.friends,
    statuses: state.statuses,
    showChart: state.showChart
  }
}

export default connect(mapStateToProps, {getTwitterData})(ChartPage);