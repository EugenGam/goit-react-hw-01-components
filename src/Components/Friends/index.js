import React from 'react';
import './styles.scss';

const FriendList = ({ friends }) => {
  const list = friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className="friends__item" key={id}>
        <span
          className="status"
          style={{ backgroundColor: isOnline ? '#008000' : '#ff0000' }}
        ></span>
        <img className="friends__avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
  return <ul className="friend-list">{list}</ul>;
};
export default FriendList;
