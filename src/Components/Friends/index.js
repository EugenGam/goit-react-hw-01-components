import React from 'react';
import './styles.scss';

let list = [];

const FriendList = ({ friends }) => {
  friends.forEach(element => {
    list.push(
      <li className="friends__item" key={element.id}>
        <span
          className="status"
          style={{ backgroundColor: element.isOnline ? '#008000' : '#ff0000' }}
        ></span>
        <img
          className="friends__avatar"
          src={element.avatar}
          alt=""
          width="48"
        />
        <p className="name">{element.name}</p>
      </li>,
    );
  });
  return <ul className="friend-list">{list}</ul>;
};

export default FriendList;
