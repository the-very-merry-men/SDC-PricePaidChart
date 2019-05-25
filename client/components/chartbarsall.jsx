import React from 'react';
import ChartBar from './chartbar.jsx';

const ChartBarsAll = (props) => {
  console.log(props.stockData);
  if (props.stockData !== undefined) {
    return props.stockData.map((element, index) => {
      let percentage = `${index * 3}%`;
      return (<ChartBar x={percentage} />);
    });
  } else {
    return null;
  }
};

export default ChartBarsAll;
