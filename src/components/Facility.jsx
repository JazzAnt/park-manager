import Image from "./Image";
import Price from "./Price";
import Rating from "./Rating";
import Maintenance from "./Maintenance";
import Demolish from "./Demolish";

const Facility = ({
  id = -1,
  name = "",
  description = "",
  imgSrc = "react.svg",
  product = "",
  rating = 0,
  price = 0,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,
  maintenance = false,
  maintenanceDate = "2026-1-1",
  maxRating = 5,
  onRate = (f) => f,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
  onMaintenanceChange = (f) => f,
  onDateChange = (f) => f,
  onDemolish = (f) => f,
}) => {
  return (
    <div className="card facility">
      <Image imgSrc={imgSrc} imgAlt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-subtitle">{description}</p>
      </div>
      <div className="facility-row">
        <Rating
          rating={rating}
          maxRating={maxRating}
          onRate={(rating) => onRate(id, rating)}
        />
        <p className="card-text">{rating}/{maxRating} Rating</p>
      </div>
      <div className="facility-row">
        <Price
          product={product}
          price={price}
          increasePrice={() => increasePrice(id, price, priceChange, maxPrice)}
          decreasePrice={() => decreasePrice(id, price, priceChange, minPrice)}
          priceChange={priceChange}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
      </div>
      <div className="facility-row">
        <Maintenance
          scheduled={maintenance}
          date={maintenanceDate}
          onScheduledChange={() => onMaintenanceChange(id)}
          onDateChange={(date) => onDateChange(id, date)}
        />
      </div>
      <div className="card-footer">
        <Demolish onDemolish={() => onDemolish(id)} />
      </div>
    </div>
  );
};

export default Facility;
