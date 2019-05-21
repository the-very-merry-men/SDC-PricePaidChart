import React, { Component } from 'react';
import Graph from './graph.jsx';
// import Faker from 'faker'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>This is a price-paid-graph.</div>
        <Graph /> 
      </div>
    );
  }
}

export default App;