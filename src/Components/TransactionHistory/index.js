import React from 'react';
import './styles.scss';

let list = [];

const TransactionHistory = ({ items }) => {
  let i = 1;
  items.forEach(element => {
    i += 1;
    list.push(
      <tr
        key={element.id}
        style={{ backgroundColor: i % 2 > 0 ? '#a6deff' : '#ffffff' }}
      >
        <td>{element.type}</td>
        <td>{element.amount}</td>
        <td>{element.currency}</td>
      </tr>,
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
