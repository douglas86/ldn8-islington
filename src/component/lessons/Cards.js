import React from "react";
import Card from "./Card";

const Cards = ({ lessons }) => {
  return (
    <div className="card-container">
      <Card lessons={lessons} />
    </div>
  );
};

export default Cards;
