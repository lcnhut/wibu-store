import React from 'react';

import './ButtonSize.scss';

export default function ButtonSize({ number }) {
  return (
    <div className="btn-container">
      <p>{number}</p>
    </div>
  );
}
