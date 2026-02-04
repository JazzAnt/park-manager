import Image from "./facility-components/Image";
import Price from "./facility-components/Price";
import Rating from "./facility-components/Rating";
import MaintenanceScheduler from "./facility-components/MaintenanceScheduler";

const Facility = ({ name, description, imgSrc, product, price, increasePrice, decreasePrice, priceChange, maxPrice, minPrice }) => {
  return (
    <div className="card">
      <Image imgSrc={imgSrc} imgAlt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul>
        <li className="list-group-item">
          <Rating />
        </li>
        <li className="list-group-item">
          <Price product={product} price={price} increasePrice={increasePrice} decreasePrice={decreasePrice} priceChange={priceChange} maxPrice={maxPrice} minPrice={minPrice}/>
        </li>
        <li className="list-group-item">
          <MaintenanceScheduler />
        </li>
      </ul>
    </div>
  );
};

export default Facility;
