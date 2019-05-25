import React from 'react';
const averagePricePaidX = (array) => {
  return ((array[0].average_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};
const XaxisInfo = (props) => (
  <g transform="translate(0,50)">
    <svg height="175" width="1000" >         
      <line y1="115" y2="115" x1="0" x2="676" stroke="black"></line>
      <circle cx={props.stockData ? averagePricePaidX(props.stockData) : null} cy="115" r="7" />
      <text y="138" x={props.stockData ? averagePricePaidX(props.stockData) : null}>Average Price Paid</text>
      <text y="153" x={props.stockData ? averagePricePaidX(props.stockData) : null}>{props.stockData ? props.stockData[0].average_price : null}</text>
      <text y="138" x="600">52 Week High</text>
      <text y="153" x="600">{props.stockData ? props.stockData[0].week52high: null}</text>
      <text y="138" x="10">52 Week Low</text>
      <text y="153" x="10">{props.stockData ? props.stockData[0].week52low: null}</text>     
    </svg>
  </g>
);

export default XaxisInfo;
