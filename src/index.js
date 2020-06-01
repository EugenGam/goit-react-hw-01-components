import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import FriendList from './Components/Friends';
import TransactionHistory from './Components/TransactionHistory';
import friends from './Components/Friends/friends.json';
import user from './Components/Profile/user.json';
import statisticalData from './Components/Statistics/statistical-data.json';
import transactions from './Components/TransactionHistory/transactions.json';
import './sass/main.scss';

ReactDOM.render(
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>,
  document.getElementById('root'),
);
