import Image from "./Image";
import Price from "./Price";
import Rating from "./Rating";
import Maintenance from "./Maintenance";
import EditBtn from "./EditBtn";
import Demolish from "./Demolish";

const Facility = ({
  facility,

  priceChange = 0,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,
  
  onRate = (f) => f,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  onMaintenanceChange = (f) => f,
  onDateChange = (f) => f,
  onEditBtn = (f) => f,
  onDemolish = (f) => f,
}) => {
  let { _id, name, description, category, image, product, rating, price, maintenance, maintenanceDate} = facility
  return (
    <div className="card facility">
      <Image imgSrc={image} imgAlt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-subtitle">{description}</p>
      </div>
      <div className="facility-row">
        <Rating
          rating={rating}
          onRate={(rating) => onRate(_id, rating)}
        />
        <p className="card-text">{rating}/5 Rating</p>
      </div>
      <div className="facility-row">
        <Price
          product={product}
          price={price}
          increasePrice={() => increasePrice(_id, price, priceChange, maxPrice)}
          decreasePrice={() => decreasePrice(_id, price, priceChange, minPrice)}
          priceChange={priceChange}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
      </div>
      <div className="facility-row">
        <Maintenance
          scheduled={maintenance}
          date={maintenanceDate}
          onScheduledChange={() => onMaintenanceChange(_id)}
          onDateChange={(date) => onDateChange(_id, date)}
        />
      </div>
      <div className="card-footer">
        <EditBtn onEditBtn={() => onEditBtn(_id)} />
        <Demolish onDemolish={() => onDemolish(_id)} />
      </div>
    </div>
  );
};

export default Facility;
