import React, { Component } from 'react';
import MainChart from './mainchart.jsx';
import _ from 'lodash';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: DINPro;
    font-weight: 900;
    src: url("/texts/dinpro.otf") format("opentype");
  }
  body {
    font-family: DINPro;
    font-weight: 100;
  }
  h2 {
    font-family: DINPro;
    font-size: 26px;
  }
`;
const AppWrap = styled.section`
  padding: 1em;
  background: white;
  color: black;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    var ticker = window.location.href.split('?')[1].slice(3);
    console.log(window.location.href.split('?')[1].slice(3));
    //ticker = Math.floor(Math.random() * 10000000);
    console.log(ticker);
  
    fetch(`/api/stocks/${ticker}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
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