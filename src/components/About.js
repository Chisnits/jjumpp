import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about-wrapper">
                    <div className="about-container">
                        <h2>
                        Log in to see a graph of your Twitter activity
                        </h2>
                        <Link className="link" to="/"><li>Home</li></Link>
                        <a href='http://localhost:8080/auth/twitter'>
                        <button className='button'>
                            Login
                        </button>
                        </a>
                        <p> This is a basic application utilizing Passport.js on a Node.js server for 
                            authentication. The server then makes a request to the twitter api to retrieve
                            additional information from your specific account. The endpoint uses
                            the username that is given at the time of authentication. The application
                            then uses React & Redux to pass the data throughout the views. The data is then
                            graphed using react-chartjs-2 to create a simple bar graph. Initially i tried to
                            use the build script that comes with create-react-app, but it was breaking my Node
                            endpoints. Instead I used a proxy located in the package.json to
                            connect the server to the React app. I also have allowed logins through passport.js
                            for both Facebook and Google + however have not yet setup graphs for data.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;