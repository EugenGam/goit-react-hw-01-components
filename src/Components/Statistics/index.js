import React from 'react';
import './styles.scss';

const colors = [
  '#2196f3',
  '#2196f3',
  '#663399',
  '#bc8f8f',
  '#fa8072',
  '#00ff7f',
  '#f7f788',
  '#c79ef0',
  '#8fa89c',
];

const Statistics = ({ stats }, title) => {
  let line = [];
  stats.forEach(element => {
    let colorId = Math.floor(Math.random() * Math.floor(colors.length - 1));
    line.push(
      <li
        className="item"
        key={element.id}
        style={{
          backgroundColor: `${colors[colorId]}`,
        }}
      >
        <span className="label">{element.label}</span>
        <span className="percentage">{element.percentage}</span>
      </li>,
    );
  });
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">{line}</ul>
    </section>
  );
};

export default Statistics;
