import React from 'react';

const YaxisInfo = (props) => (
  <g transform = "translate(500,0)">
    <text y="15">x% Lower</text>
    <text y="35">Right Now</text>
    <circle cx="20" cy="165" r="7"></circle>
    <line y1="0" y2="115" x1="20 " x2="20" stroke="black" transform="translate(0,50)"></line>
  </g>
);

export default YaxisInfo;