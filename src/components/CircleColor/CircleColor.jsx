import React from 'react';

import './CircleColor.scss';

export default function CircleColor({ color }) {
  return (
    <div className="circle-color-border">
      <div className="circle-color" style={{ backgroundColor: color }}></div>
    </div>
  );
}
