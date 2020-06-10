import React from 'react';
import './styles.scss';

const TransactionHistory = ({ items }) => {
  let i = 1;
  const list = items.map(({ id, type, amount, currency }) => {
    i += 1;
    return (
      <tr
        key={id}
        style={{ backgroundColor: i % 2 > 0 ? '#a6deff' : '#ffffff' }}
      >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{list}</tbody>
    </table>
  );
};

export default TransactionHistory;
