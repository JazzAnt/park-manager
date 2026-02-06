import { useState } from "react";
const AddFacilityForm = ({ addNewFacility = (f) => f }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(undefined);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(5);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(20);

  const saveUploadedImage = () => {
    // Image is optional so if user doesn't upload anything then it's fine
    if (!image) return true;
    // Form already has these type restriction but users can override it so add another check here
    if (
      image.type !== "image/jpeg" &&
      image.type !== "image/png" &&
      image.type !== "image/svg+xml"
    ) {
      alert(
        "ERROR: Selected file type is not supported. File must be a jpg/jpeg, png or svg file.",
      );
      return false;
    }
    // Max size 8MB
    if (image.size > 8000000) {
      alert("ERROR: Image cannot exceed 8MB.");
      return false;
    }
    // This alert will be replaced with an actual way to save the image to the server
    alert(
      `Image upload is not implemented yet, but if you see this message then your file met all the validation criteria and would've been uploaded. For now the Vite logo is used as a placeholder image for all newly added facilities.`,
    );
    return true;
  };

  const submit = () => {
    if (saveUploadedImage()) {
      addNewFacility(
        name,
        description,
        "vite.svg",
        "",
        product,
        price,
        minPrice,
        maxPrice,
      );
      setName("");
      setDescription("");
      setImage(undefined)
      setProduct("");
      setPrice(5);
      setMinPrice(1);
      setMaxPrice(20);
    }
  };

  // Button onClick is used to handle submit rather than onSubmit
  // because onSubmit resets the input values even if the input
  // didn't pass the validateImage() check
  return (
    <form>
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
      <label>Image (max 8MB)</label>
      <input
        type="file"
        accept="image/jpeg, image/png, image/svg+xml"
        onChange={(event) => setImage(event.target.files[0])}
      />
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
      <button type="button" onClick={submit}>
        Add Facility
      </button>
    </form>
  );
};

export default AddFacilityForm;
