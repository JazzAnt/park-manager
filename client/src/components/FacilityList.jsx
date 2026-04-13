import Facility from "./Facility";
const FacilityList = ({
  facilities = [],

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
          key={facility._id}
          facility={facility}

          priceChange={priceChange}
          minPrice={minPrice}
          maxPrice={maxPrice}

            onRate={onRate}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
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
