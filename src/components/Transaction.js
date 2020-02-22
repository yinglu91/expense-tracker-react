import React from 'react';

const Transaction = ({ transaction: x }) => {
  const sign = x.amount < 0 ? '-' : '+';
  return (
    <li className={x.amount < 0 ? 'minus' : 'plus'}>
      {x.text}{' '}
      <span>
        {sign}${Math.abs(x.amount)}
      </span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default Transaction;
