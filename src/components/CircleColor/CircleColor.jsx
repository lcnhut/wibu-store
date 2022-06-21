import React from 'react';

import './CircleColor.scss';

export default function CircleColor({ color, active }) {
  return (
    <div
      className={active ? 'circle-color-border active' : 'circle-color-border'}
    >
      <div className="circle-color" style={{ backgroundColor: color }}></div>
    </div>
  );
}
