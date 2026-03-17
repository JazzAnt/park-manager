import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacilityForm from "./FacilityForm";

const AddFacilityForm = ({ addNewFacility = (f) => f }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(undefined);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(5);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(20);
  const [fileKey, setFileKey] = useState(0);

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

  const reset = () => {
    setName("");
    setDescription("");
    setImage(undefined);
    // Changing the file input key is done so that React is forced to reload the element
    // which is used to remove the visual indication that a file has been uploaded.
    setFileKey(fileKey ? 0 : 1);
    setProduct("");
    setPrice(5);
    setMinPrice(1);
    setMaxPrice(20);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!saveUploadedImage()) return;
    addNewFacility(
      name,
      description,
      "vite.svg",
      "Placeholder Image",
      product,
      price,
      minPrice,
      maxPrice,
    );
    reset();
    navigate("/");
  };

  return (
    <FacilityForm
      submitBtnText="Add Facility"
      onSubmit={onSubmit}
      name={name}
      setName={setName}
      description={description}
      setDescription={setDescription}
      fileKey={fileKey}
      setImage={setImage}
      product={product}
      setProduct={setProduct}
      price={price}
      setPrice={setPrice}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
    />
  );
};

export default AddFacilityForm;
