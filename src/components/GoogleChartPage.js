import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GoogleChartPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            loggedIn: false,
        }
      }
      componentDidMount(){
        //as soon as the user accesses the chart page,
        //the component retrieves the user's username
        //from Twitter
        axios.get('http://localhost:8080/api/googleuser')
        .then((response)=>{
          this.setState({user: response.data, loggedIn: true})
        })
        .catch(err=>{console.log('error', err)})
      }
    render() {
        if(!this.state.loggedIn){
            return (
              <div className="chart-display-wrapper">
                <div className="chart-display-container">
                  <a href='http://localhost:8080/auth/google'>
                    <button className='button'>
                      Log in to Google
                    </button>
                  </a>
                  <Link className="link" to="/"><li>Home</li></Link>
                </div>
              </div>
            );
          }
          if(!this.props.showChart){
            return (
                <div className="chart-display-wrapper">
                  <div className="chart-display-container">
                  <h2>Welcome {this.state.user}!</h2>
                  <Link className="link" to="/"><li>Home</li></Link>
                </div>
              </div>
            );
          }
        return (
            <div className="chart-wrapper">
        <h2>Welcome {this.state.user}!</h2>
        <Link className="link" to="/"><li>Home</li></Link>
      </div>
    );
  }
}

export default (GoogleChartPage);