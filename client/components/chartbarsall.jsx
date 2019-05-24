import React from 'react';
import ChartBar from './chartbar.jsx';

const ChartBarsAll = () => {
  return (
    <g transform="translate(20,50)">
      <ChartBar x="3%" />
      <ChartBar x="6%" />
    </g>
  );
};

export default ChartBarsAll;
