import React from 'react';
import XaxisInfo from './xaxisinfo.jsx';
import YaxisInfo from './yaxisinfo.jsx';
import ChartBarsAll from './chartbarsall.jsx';

const averagePricePaidX = (array) => {
  return ((array[0].average_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};
const currentPricePaidX = (array) => {
  return ((array[0].current_price - array[0].week52low) / (array[0].week52high - array[0].week52low)) * 700;
};

const MainChart = (props) => (
  <div>
    <svg width="700" height="300" fill="white">
      <XaxisInfo stockData={props.stockData}/>
      <YaxisInfo stockData={props.stockData} />
      <g transform="translate(0,50)">
        <ChartBarsAll 
          stockData={props.stockData} 
          maxPPPI={props.maxPPPI} 
          averagePricePaidX={props.stockData ? averagePricePaidX(props.stockData) : null}
          currentPricePaidX={props.stockData ? currentPricePaidX(props.stockData) : null} />
      </g>
    </svg>
  </div> 

);

export default MainChart;