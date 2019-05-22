import React, { Component } from 'react';
import MainChart from './mainchart.jsx';
import XaxisInfo from './xaxisinfo.jsx';
// import YaxisInfo from './yaxisinfo.jsx';
// import Faker from 'faker'

const h2style = {
  color: 'black',
  fontFamily: '"DIN Pro", -apple-system, system-ui, sans-serif',
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 style={h2style}>Price Paid on Robinhood</h2>
        {/* <XaxisInfo /> */}
        <MainChart /> 
      </div>
    );
  }
}

export default App;