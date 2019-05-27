import React, { Component } from 'react';
import MainChart from './mainchart.jsx';
import _ from 'lodash';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: DINPro;
    font-weight: 900;
    src: url("./texts/dinpro.otf") format("opentype");
  }
  body {
    font-family: "DINPro";
  }
  h2 {
    font-size: 26px;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const AppWrap = styled.section`
  padding: 1em;
  background: #1b1b1d;
  color: #fff;
`;


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
  createDate() {
    let todaysDate = new Date();
    
  }
  render(props) {
    return (
      <AppWrap>
        <GlobalStyles />
        <div>
          <h2>Price Paid on Robinhood</h2>
          <svg height="20" width="676">
            <line y1="0" y2="0" x1="0" x2="676" stroke="black" fill="black"></line>
          </svg>
          <MainChart 
            stockData = {this.state.stockData} 
            maxPPPI = {this.state.maxPPPI} /> 
        </div>
      </AppWrap>
    );
  }
}

export default App;