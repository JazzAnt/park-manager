import { useState } from "react";
const AddFacilityForm = ({ addNewFacility = (f) => f }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(5);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(20);

  const submit = (event) => {
    event.preventDefault();
    addNewFacility(name, description, product, price, minPrice, maxPrice);
    setName("");
    setDescription("");
    setProduct("");
    setPrice(5);
    setMinPrice(1);
    setMaxPrice(20);
  };

  return (
    <form onSubmit={submit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        placeholder="Name of Facility"
        required
        aria-required
        onChange={(event) => setName(event.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        value={description}
        placeholder="Description of Facility"
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>Image</label>
      <input type="file" />
      <label>Product</label>
      <input
        type="text"
        value={product}
        placeholder="Product sold by facility e.g. 'Ticket'"
        required
        aria-required
        onChange={(event) => setProduct(event.target.value)}
      />
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
      <button>Add Facility</button>
    </form>
  );
};

export default AddFacilityForm;
