import React from 'react';

import './ButtonSize.scss';

export default function ButtonSize({ number, active }) {
  return (
    <div className={active ? 'btn-container active' : 'btn-container'}>
      <p>{number == 0 ? 'All' : number}</p>
    </div>
  );
}
