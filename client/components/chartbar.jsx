import React from 'react';

const inRange = function(num, min, max) {
  return ((num - min) * (num - max) <= 0);
};

const ChartBar = (props) => {
  return (
    <rect width="24.8" 
      height={props.height} 
      x={props.x} 
      y={96 - props.height} 
      style={inRange(props.x, props.averagePricePaidX - 11, props.currentPricePaidX) || inRange(props.x, props.currentPricePaidX - 11, props.averagePricePaidX) ? {fill: '#21ce99'} : {fill: 'black'}} />
  );
};


export default ChartBar;