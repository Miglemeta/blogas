import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="left-column">
        <img className="thumbnail" src={props.imgSource} alt={props.alt} />
      </div>
      <div className="right-column">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
