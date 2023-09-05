import React, { useState } from "react";
import "./CarRenting.css";
import Card from "./Card";

import RentingDate from "./RentingDate";

const CarRenting = (props) => {
  const [title, setTitle] = useState(props.carTitle);

  const clickHandler = () => {
    setTitle("Updated !");
  };
  return (
    <Card className="car-item">
      <RentingDate date={props.date} />
      <div className="car-item__description">
        <h2>{title}</h2>
        <div className="car-item__price">${props.carPrice}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default CarRenting;
