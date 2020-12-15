import React, { Component } from 'react'
import Chart from 'components/Charts/Chart'

export default class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Admin', 'Manager', 'Teacher', 'Student', 'Vendor', 'MS'],
        datasets:[
          {
            label:'No of Users',
            data:[
              5,
              8,
              9,
              6,
              7,
              8
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dashboard</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Roles" legendPosition="bottom"/>
      </div>
    );
  }
}

