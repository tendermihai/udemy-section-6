import React, { useState } from "react";
import Cars from "./components/Cars.js";
import NewRents from "./components/NewRents/NewRents.js";

const DUMMY_CARS = [
  {
    id: "1",
    carTitle: "Volkswagen Golf",
    carPrice: 70.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: "2",
    carTitle: "Lamborghini",
    carPrice: 71.99,
    date: new Date(2020, 3, 28),
  },
  {
    id: "3",
    carTitle: "BMW",
    carPrice: 72.99,
    date: new Date(2023, 5, 28),
  },
];

function App() {
  const [cars, setCars] = useState(DUMMY_CARS);

  const addRentHandler = (rentData) => {
    setCars((prevCars) => [
      {
        id: Math.random().toString(),
        carTitle: rentData.carTitle,
        carPrice: rentData.carPrice,
        date: rentData.date,
      },
      ...prevCars,
    ]);
  };

  return (
    <div>
      <NewRents onAddRent={addRentHandler} />
      <Cars cars={cars} />;
    </div>
  );
}

export default App;
