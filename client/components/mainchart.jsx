import React from 'react';
import XaxisInfo from './xaxisinfo.jsx';
import YaxisInfo from './yaxisinfo.jsx';
import ChartBarsAll from './chartbarsall.jsx';

const MainChart = () => (
  <div>
    <svg width="700" height="300">
      
      <YaxisInfo />
      <XaxisInfo />
      <ChartBarsAll />
    </svg>
  </div> 

);

export default MainChart;