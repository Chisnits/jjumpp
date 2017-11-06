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
    //as soon as the user accesses the chart page,
    //the component retrieves the user's username
    //from Twitter
    axios.get('http://localhost:8080/api/user')
    .then((response)=>{
      this.setState({user: response.data, loggedIn: true})
    })
    .catch(err=>{console.log('error', err)})
  }

  displayChart(){
    //This function passes the user's username
    //into the action so it can retrieve the user's
    //profile information.
    this.props.getTwitterData(this.state.user)
  }

  render() {
    //If the user is not logged in, this conditional JSX
    //is returned prompting the user to log in.
    if(!this.state.loggedIn){
      return (
        <div className="chart-display-wrapper">
          <div className="chart-display-container">
            <a href='http://localhost:8080/auth/twitter'>
              <button className='button'>
                Log in to Twitter
              </button>
            </a>
            <Link className="link" to="/"><li>Home</li></Link>
          </div>
        </div>
      );
    }
    //Once the user has logged in, the user is then able to 
    //access the graph.
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
    //Below the props are passed into the Chart component
    //where the data is rendered into a bar graph.
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