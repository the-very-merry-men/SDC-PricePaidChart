import React, { Component } from 'react';
import MainChart from './mainchart.jsx';
import _ from 'lodash';


// import YaxisInfo from './yaxisinfo.jsx';
// import Faker from 'faker'

const h2style = {
  color: 'black',
  fontFamily: '"DIN Pro", -apple-system, system-ui, sans-serif',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    fetch('http://localhost:3000/api/stocks/test')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          stockData: data,
          maxPPPI: _.maxBy(data, (stock) => {
            return stock.pppi;
          })
        });
      });
  }
  render(props) {
    return (
      <div>
        <h2 style={h2style}>Price Paid on Robinhood</h2>
        <MainChart stockData = {this.state.stockData} maxPPPI = {this.state.maxPPPI} mPPPI = {this.state.maxPPPI ? this.state.maxPPPI.pppi : null} /> 
      </div>
    );
  }
}

export default App;