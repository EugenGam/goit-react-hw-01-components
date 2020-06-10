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

let colorId = arr =>
  arr[Math.floor(Math.random() * Math.floor(colors.length - 1))];

const Statistics = ({ stats }, title) => {
  const line = stats.map(({ id, label, percentage }) => {
    return (
      <li
        className="item"
        key={id}
        style={{
          backgroundColor: colorId(colors),
        }}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
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
