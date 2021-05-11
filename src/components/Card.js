import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={"/post/" + props.posturl}>
      <div className="card">
        <div className="left-column">
          <img className="thumbnail" src={props.imgSource} alt={props.alt} />
        </div>
        <div className="right-column">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
