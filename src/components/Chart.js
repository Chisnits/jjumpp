import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Follower Count', 'Friends Count', 'Statuses Count'],
        datasets: [
          {
            data:[
              this.props.followers,
              this.props.friends,
              this.props.statuses
            ],
            backgroundColor:[
              '#227FF2',
              '#00A8FF',
              '#00D2FF'
            ]
          }
        ]
      },
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Bar
          data={this.state.chartData}
          height={90}
          options={{
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero: true
                  }
              }]
            },
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Twitter Followers, Friends, and Statuses',
              fontSize: 25,
            }
            
          }}
        />
      </div>
    );
  }
}

export default Chart