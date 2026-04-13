import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FacilityForm from "./FacilityForm";

const EditFacilityForm = ({
  editFacility = (f) => f,
  minPrice = 0,
  maxPrice = Number.MAX_SAFE_INTEGER,
}) => {
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const URL = `http://localhost:5000/facilities/${id}`;
      try {
        const response = await fetch(URL);
        if (!response.ok)
          throw new Error(`Error Code ${response.status}`, response.statusText);

        const data = await response.json();
        setFacility({
          name: data.name,
          description: data.description,
          category: data.category,
          image: data.image,
          imageSource: data.imageSource,
          product: data.product,
          rating: data.rating,
          price: data.price,
          maintenance: data.maintenance,
          maintenanceDate: data.maintenanceDate,
        });
      } catch (error) {
        console.error(error.message);
        navigate("/"); //if fetching data fails, exit
      }
    };
    fetchData();

    return () => {};
  }, []);

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
    editFacility(id, facility, (imageData!==undefined));
    reset();
    navigate("/");
  };

  return (
    <FacilityForm
      submitBtnText="Edit Facility"
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

export default EditFacilityForm;
