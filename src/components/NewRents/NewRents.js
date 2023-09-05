import React from "react";
import "./NewRents.css";
import RentsForm from "../NewRents/RentsForm";

const NewRents = (props) => {
  const SaveRentsDataHandler = (enteredRentData) => {
    const rentsData = {
      carTitle: enteredRentData.carTitle,
      carPrice: enteredRentData.carPrice,
      date: enteredRentData.date,
      id: Math.random().toString(),
    };
    console.log(rentsData, "this is rents data");
    props.onAddRent(rentsData);
  };

  return (
    <div className="new-rents">
      <RentsForm onSaveRentsData={SaveRentsDataHandler} />
    </div>
  );
};

export default NewRents;
