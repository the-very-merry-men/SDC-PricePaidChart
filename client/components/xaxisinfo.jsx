import React from 'react';

const XaxisInfo = (props) => (
  <g transform="translate(0,50)">
    <svg height="175" width="1000" style={{color: 'black', fontFamily: '"DIN Pro", -apple-system, system-ui, sans-serif'}}>         
      <line y1="115" y2="115" x1="0" x2="676" stroke="black"></line>
      <circle cx="250" cy="115" r="7" />
      <text y="138" x="250">Average Price</text>
      <text y="133" x="600">52 Week High</text>
      <text y="148" x="600">$xx.xx</text>
      <text y="133" x="10">52 Week Low</text>
      <text y="148" x="10">$xx.xx</text>     
    </svg>
  </g>
);

export default XaxisInfo;
