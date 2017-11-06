import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div>
        <h3>
         
        </h3>
        <h3>
          Welcome! Log in to see a visual representaion of your Twitter stats.
        </h3>
        <br/>
        <a href='http://localhost:8080/auth/twitter'>
          <button className='button'>
            Enter
          </button>
        </a>
      </div>
            </div>
        );
    }
}

export default About;