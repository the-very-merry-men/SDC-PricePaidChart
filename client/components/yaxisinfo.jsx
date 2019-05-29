import React from 'react';
const currentPricePaidX = (array) => {
  return ((array[0].current_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};
const yAxisShift = (array) => {
  return `translate(${currentPricePaidX(array)}, 0)`;
};
const percentDiff = (array) => {
  return (((array[0].current_price - array[0].average_price) / array[0].average_price) * 100).toFixed();
};
const higherOrLower = (array) => {
  if (percentDiff(array) > 0) {
    return 'Higher';
  } else {
    return 'Lower';
  }
};
const YaxisInfo = (props) => (
  <g transform = {props.stockData ? yAxisShift(props.stockData) : null} fill = "#21ce99">
    <text 
      y="15" 
      text-anchor="middle"
      style={{
        'font': 'normal 16px DINPro',
      }}>{props.stockData ? Math.abs(percentDiff(props.stockData)) : null}% {props.stockData ? higherOrLower(props.stockData) : null}</text>
    <text 
      y="35" 
      text-anchor="middle"
      style={{
        'font': 'normal 13px DINPro'
      }}>Right Now</text>
    <circle 
      cy="165" 
      r="7"></circle>
    <line 
      y1="0" 
      y2="110" 
      stroke="#21ce99" 
      transform="translate(0,50)"></line>
  </g>
);

export default YaxisInfo;