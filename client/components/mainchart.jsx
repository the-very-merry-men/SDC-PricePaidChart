import React from 'react';
import XaxisInfo from './xaxisinfo.jsx';
import YaxisInfo from './yaxisinfo.jsx';
import ChartBarsAll from './chartbarsall.jsx';

const MainChart = (props) => (
  <div>
    <svg width="700" height="300">
      
      <YaxisInfo stockData={props.stockData} />
      <XaxisInfo stockData={props.stockData}/>
      <g transform="translate(0,50)">
        <ChartBarsAll stockData={props.stockData} maxPPPI={props.maxPPPI}/>
      </g>
    </svg>
  </div> 

);

export default MainChart;