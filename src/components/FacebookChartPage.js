import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FacebookChartPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            loggedIn: false,
        }
      }
      componentDidMount(){
        axios.get('http://localhost:8080/api/fbuser')
        .then((response)=>{
          this.setState({user: response.data, loggedIn: true})
        })
        .catch(err=>{console.log('error', err)})
      }
    render(){
      console.log(this.state.user)
      if(!this.state.loggedIn){
        return (
          <div className="chart-display-wrapper">
              <div className="chart-display-container">
                <a href='http://localhost:8080/auth/facebook'>
                <button className='button'>
                  Log in to Facebook
                </button>
                </a>
                <Link className="link" to="/"><li>Home</li></Link>
              </div>
          </div>
        );
      }
        return (
            <div>
                <div className="chart-wrapper">
                <h2>Welcome {this.state.user}!</h2>
                <Link className="link" to="/"><li>Home</li></Link>
                </div>
            </div>
        );
    }
}

export default FacebookChartPage;