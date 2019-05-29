import React from 'react';
const averagePricePaidX = (array) => {
  return ((array[0].average_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};
const XaxisInfo = (props) => (
  <g transform="translate(0,50)" font-size="13px">
    <svg height="175" width="1000" >         
      <line y1="115" y2="115" x1="0" x2="676" stroke="#8c8c8e"></line>
      <circle cx={props.stockData ? averagePricePaidX(props.stockData) : null} cy="115" r="7" fill="black" />
      <text  
        y="138" 
        x={props.stockData ? averagePricePaidX(props.stockData) : null}
        textAnchor="middle" fill="black">Average Price Paid</text>
      <text  
        y="153" 
        x={props.stockData ? averagePricePaidX(props.stockData) : null}
        textAnchor="middle" fill="black">{props.stockData ? `$${props.stockData[0].average_price}` : null}</text>
      <text y="138" x="700" textAnchor="end" fill="#8c8c8e">52 Week High</text>
      <text y="153" x="700" textAnchor="end" fill="#8c8c8e">{props.stockData ? `$${props.stockData[0].week52high}` : null}</text>
      <text y="138" x="0" fill="#8c8c8e">52 Week Low</text>
      <text y="153" x="0" fill="#8c8c8e">{props.stockData ? `$${props.stockData[0].week52low}` : null}</text>     
    </svg>
  </g>
);

export default XaxisInfo;
