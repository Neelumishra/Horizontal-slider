import React from 'react';
import './horizontal.css';

export default function Slider(props) {
  return (
    <div className="ChildParent">
      <img className="childimage" src={props.image} />
      <h2 >{props.name}</h2>
      <p>{props.designation}</p>
      <p>{props.company}</p>
      <h5>{props.experience}</h5>
    </div>
  );
}
