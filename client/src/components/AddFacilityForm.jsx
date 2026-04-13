import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacilityForm from "./FacilityForm";

const AddFacilityForm = ({
  addNewFacility = (f) => f,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,
}) => {
  const navigate = useNavigate();
  const [facility, setFacility] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    imageSource: "",
    product: "",
    rating: 1,
    price: 1,
    maintenance: false,
    maintenanceDate: "2026-01-01T00:00:00Z",
  });

  const [fileKey, setFileKey] = useState(0);
  const [imageData, setImageData] = useState(undefined);

  const validateImage = () => {
    // Image is optional so if user doesn't upload anything then it's fine
    if (!imageData) return true;
    // Form already has these type restriction but users can override it so add another check here
    if (
      imageData.type !== "image/jpeg" &&
      imageData.type !== "image/png" &&
      imageData.type !== "image/svg+xml"
    ) {
      alert(
        "ERROR: Selected file type is not supported. File must be a jpg/jpeg, png or svg file.",
      );
      return false;
    }
    // Max size 8MB
    if (imageData.size > 8000000) {
      alert("ERROR: Image cannot exceed 8MB.");
      return false;
    }
    return true;
  };

  const reset = () => {
    setFacility({
      name: "",
      description: "",
      category: "",
      image: "",
      imageSource: "",
      product: "",
      rating: 1,
      price: 1,
      maintenance: false,
      maintenanceDate: "2026-01-01T00:00:00Z",
    });
    // Changing the file input key is done so that React is forced to reload the element
    // which is used to remove the visual indication that a file has been uploaded.
    setFileKey(fileKey ? 0 : 1);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validateImage()) return;
    addNewFacility(facility);
    reset();
    navigate("/");
  };

  return (
    <FacilityForm
      submitBtnText="Add Facility"
      onSubmit={onSubmit}
      name={facility.name}
      setName={(value) => setFacility({ ...facility, name: value })}
      description={facility.description}
      setDescription={(value) =>
        setFacility({ ...facility, description: value })
      }
      category={facility.category}
      setCategory={(value) => setFacility({ ...facility, category: value })}
      product={facility.product}
      setProduct={(value) => setFacility({ ...facility, product: value })}
      price={facility.price}
      setPrice={(value) => setFacility({ ...facility, price: value })}
      minPrice={minPrice}
      maxPrice={maxPrice}
      fileKey={fileKey}
      setImage={setImageData}
    />
  );
};

export default AddFacilityForm;
