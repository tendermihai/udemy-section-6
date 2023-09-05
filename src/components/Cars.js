import CarRenting from "./CarRenting";
import Card from "./Card";

const Cars = ({ cars }) => {
  return (
    <div>
      <Card className="cars">
        <h2>Prices are shown for a week</h2>

        {cars.map((car) => (
          <CarRenting
            key={car.id}
            carTitle={car.carTitle}
            carPrice={car.carPrice}
            date={car.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Cars;
