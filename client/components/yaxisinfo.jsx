import React from 'react';
const currentPricePaidX = (array) => {
  return ((array[0].current_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};
const yAxisShift = (array) => {
  return `translate(${currentPricePaidX(array)}, 0)`
}
const YaxisInfo = (props) => (
  <g transform = {props.stockData ? yAxisShift(props.stockData): null}>
    <text y="15">{props.stockData ? props.stockData[0].average_price / props.stockData[0].current_price : null}% Lower</text>
    <text y="35">Right Now</text>
    <circle cx="20" cy="165" r="7"></circle>
    <line y1="0" y2="115" x1="20 " x2="20" stroke="black" transform="translate(0,50)"></line>
  </g>
);

export default YaxisInfo;