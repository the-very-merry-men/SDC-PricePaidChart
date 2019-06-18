import React from 'react';
import ChartBar from './chartbar.jsx';

const ChartBarsAll = (props) => {
  console.log(props.stockData);
  
  if (props.stockData !== undefined && props.maxPPPI.pppi !== undefined) {
    return props.stockData.map((element, index) => {
      let xCoord = `${index * .016 * 3 * 700}`;
      return (<ChartBar 
        x={xCoord} 
        key={index}
        pia={element.pia} 
        height={(element.pppi / props.maxPPPI.pppi) * 96}
        averagePricePaidX={props.averagePricePaidX}
        currentPricePaidX={props.currentPricePaidX}/>);
    });
  } else {
    return null;
  }
};

export default ChartBarsAll;
