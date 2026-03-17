const FacilityForm = ({
  submitBtnText = "Submit",
  onSubmit = (f) => f,
  name = "",
  setName = (f) => f,
  description = "",
  setDescription = (f) => f,
  fileKey = 0,
  setImage = (f) => f,
  product = "",
  setProduct = (f) => f,
  price = 0,
  setPrice = (f) => f,
  minPrice = 0,
  setMinPrice = (f) => f,
  maxPrice = 0,
  setMaxPrice = (f) => f,
}) => {
  return (
    <form className="facilityForm" onSubmit={(event) => onSubmit(event)}>
      <fieldset>
        <legend>Facility Data</legend>
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
          <label>Image (max 8MB)</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            onChange={(event) => setImage(event.target.files[0])}
            key={fileKey}
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Product Data</legend>
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
          <label>Price</label>
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
          <label>Minimum Price</label>
          <input
            type="number"
            value={minPrice}
            required
            aria-required
            min={0}
            max={price}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Maximum Price</label>
          <input
            type="number"
            value={maxPrice}
            required
            aria-required
            min={price}
            max={Number.MAX_SAFE_INTEGER}
            onChange={(event) => setMaxPrice(event.target.value)}
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
