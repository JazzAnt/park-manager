const FacilityForm = ({
  submitBtnText = "Submit",
  onSubmit = (f) => f,
  name = "",
  setName = (f) => f,
  description = "",
  setDescription = (f) => f,
  category = "",
  setCategory = (f) => f,
  product = "",
  setProduct = (f) => f,
  price = 0,
  setPrice = (f) => f,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,
  fileKey = 0,
  setImage = (f) => f,
}) => {
  return (
    <form className="facilityForm" onSubmit={(event) => onSubmit(event)}>
      <fieldset>
        <legend>Facility Form</legend>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Name of Facility"
            required
            aria-required
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea
            value={description}
            placeholder="Description of Facility"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Category</label>
          <select value={category} onChange={setCategory}>
            <option value="" disabled>
              Choose a Category
            </option>
            <option value="Roller Coaster">Roller Coaster</option>
            <option value="Gentle Ride">Gentle Ride</option>
            <option value="Thrill Ride">Thrill Ride</option>
            <option value="Water Ride">Water Ride</option>
            <option value="Food Stall">Food Stall</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Facility Form</legend>
        <div className="form-row">
          <label>Product</label>
          <input
            type="text"
            value={product}
            placeholder="Product sold by facility e.g. 'Ticket'"
            required
            aria-required
            onChange={(event) => setProduct(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Price ({minPrice}-{maxPrice})</label>
          <input
            type="number"
            value={price}
            required
            aria-required
            min={minPrice}
            max={maxPrice}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Image (max 8MB)</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            key={fileKey}
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
      </fieldset>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            if (confirm("Reset inputted values to default?")) reset();
          }}
        >
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          {submitBtnText}
        </button>
      </div>
    </form>
  );
};

export default FacilityForm;
