import Facility from "./Facility";
const FacilityList = ({
  facilities = [],
  maxRating = 5,
  onRate = (f) => f,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
  onDemolish = (f) => f,
}) =>
  facilities.length === 0 ? (
    <h2>No Facility in the Database</h2>
  ) : (
    <>
      <h2>Showing {facilities.length} Facilities</h2>
      <div className="row">
        {facilities.map((facility) => (
          <Facility
            key={facility.id}
            {...facility}
            maxRating={maxRating}
            onRate={onRate}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
            priceChange={priceChange}
            onDemolish={onDemolish}
          />
        ))}
      </div>
    </>
  );

export default FacilityList;
