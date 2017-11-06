import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Follower Count',
         'Friends Count',
         'Favorites Count', 
         'Statuses Count'
        ],
        datasets: [
          {
            data:[
              this.props.followers,
              this.props.friends,
              this.props.favorites,
              this.props.statuses
            ],
            backgroundColor:[
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#56ff58'
            ],
            hoverBackgroundColor: [
              '#ff62a4',
              '#36baeb',
              '#ffee56',
              '#88ff56'
              ]
          }
        ]
      },
    }
  }
  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          height={100}
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
              text: 'Twitter Activity',
              fontSize: 25,
            }
            
          }}
        />
      </div>
    );
  }
}

export default Chart