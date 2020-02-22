import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div>
        <h3>History</h3>
        <ul className='list'>
          {transactions.map(x => (
            <Transaction key={x.id} transaction={x} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
