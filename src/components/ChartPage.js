import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles/Chart.css';

import Chart from './Chart';
import {getTwitterData} from './../ducks/reducer';

class ChartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: [],
        loggedIn: false,
    }
    this.displayChart = this.displayChart.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:8080/api/user')
    .then((response)=>{
      this.setState({user: response.data, loggedIn: true})
    })
    .catch(err=>{console.log('error', err)})
  }

  displayChart(){
    this.props.getTwitterData(this.state.user)
  }

  render() {
    if(!this.state.loggedIn){
      return (
        <div>
          <br/>
          <a href='http://localhost:8080/auth/twitter'>
            <button className='button'>
              Log in to Twitter
            </button>
          </a>
          <Link className="link" to="/"><li>Home</li></Link>
        </div>
      );
    }
    if(!this.props.showChart){
      return (
        <div className="chart-display-wrapper">
          <div className="chart-display-container">
            <h2>Welcome {this.state.user}!</h2>
            <Link className="link" to="/"><li>Home</li></Link>
            <button className='button' onClick={this.displayChart}>
              Show Chart
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="chart-wrapper">
        <h2>Welcome {this.state.user}!</h2>
        <Link className="link" to="/"><li>Home</li></Link>
        {this.props.showChart ? 
          <Chart  
                followers={this.props.followers}
                friends={this.props.friends}
                favorites={this.props.favorites}
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
  return {
    followers: state.followers,
    friends: state.friends,
    statuses: state.statuses,
    showChart: state.showChart
  }
}

export default connect(mapStateToProps, {getTwitterData})(ChartPage);