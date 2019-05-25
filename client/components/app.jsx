import React, { Component } from 'react';
import MainChart from './mainchart.jsx';

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
          
        });
      });
  }
  render(props) {
    return (
      <div>
        <h2 style={h2style}>Price Paid on Robinhood</h2>
        <MainChart stockData = {this.state.stockData}/> 
      </div>
    );
  }
}

export default App;