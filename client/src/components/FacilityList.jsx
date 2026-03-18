import Facility from "./Facility";
const FacilityList = ({
  facilities = [],
  maxRating = 5,
  onRate = (f) => f,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
  onMaintenanceChange = (f) => f,
  onDateChange = (f) => f,
  onEditBtn = (f) => f,
  onDemolish = (f) => f,
}) =>
  facilities.length === 0 ? (
    <div className="facilityList">
      <h2>No Facility in the Database</h2>
    </div>
  ) : (
    <div className="facilityList">
      <h2>Showing {facilities.length} Facilities</h2>
      <div className="facilityContainer">
        {facilities.map((facility) => (
          <Facility
            key={facility.id}
            {...facility}
            maxRating={maxRating}
            onRate={onRate}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
            priceChange={priceChange}
            onMaintenanceChange={onMaintenanceChange}
            onDateChange={onDateChange}
            onEditBtn={onEditBtn}
            onDemolish={onDemolish}
          />
        ))}
      </div>
    </div>
  );

export default FacilityList;
