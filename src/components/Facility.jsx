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
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
}) => {
  return (
    <div className="card">
      <Image imgSrc={imgSrc} imgAlt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul>
        <li className="list-group-item">
          <Rating rating={rating} maxRating={maxRating} />
        </li>
        <li className="list-group-item">
          <Price
            product={product}
            price={price}
            increasePrice={() => increasePrice(id, price, priceChange, maxPrice)}
            decreasePrice={() => decreasePrice(id, price, priceChange, minPrice)}
            priceChange={priceChange}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
        </li>
        <li className="list-group-item">
          <Maintenance scheduled={maintenance} date={maintenanceDate} />
        </li>
        <li className="row justify-content-end">
          <Demolish/>
        </li>
      </ul>
    </div>
  );
};

export default Facility;
