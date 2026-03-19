import express from "express";
import data from "./data.json" with { type: "json" };

const facilityRouter = express.Router();

let facilities = data;
/**
 * GET
 */
facilityRouter.get("/facility", (req, res) => {
  res.status(200).send(facilities);
});
facilityRouter.get("/facility/:id", (req, res) => {
  let { id } = req.params;
  let facility = facilities.filter((facility) => facility.id === id);
  if (facility.length === 0) {
    res.status(404).send({ error: "Facility with that id not found" });
  }
  res.status(200).send(facility[0]);
});
/**
 * POST
 * Normally users set most of the parameters, but for now we make
 * users set only the name, description and product to simplify testing
 */
facilityRouter.post("/facility", (req, res) => {
  let { name, description = "", product, rating = 1, price = 5 } = req.body;

  if (!name || !product) {
    res.status(400).send({ error: "name and product are required values" });
  }

  let newFacility = {
    id: new Date().getTime() + "", //Id should be v4() but I don't wanna install uuid just for testing
    name,
    description,
    imgSrc: "vite.svg",
    imgCredit: "",
    product,
    rating: 0,
    price: 5,
    minPrice: 1,
    maxPrice: 20,
    maintenance: false,
    maintenanceDate: "1998-10-07",
  };

  facilities = [...facilities, newFacility];
  res.status(201).send(newFacility);
});
/**
 * PUT
 * Can be changed: name, description, product, rating, price
 */
facilityRouter.put("/facility/:id", (req, res) => {
  let { id } = req.params;

  let facility = facilities.filter((facility) => facility.id === id);
  if (facility.length === 0) {
    res.status(404).send({ error: "Facility with that id not found" });
  }

  let {
    name: oldName,
    description: oldDescription,
    product: oldProduct,
    rating: oldRating,
    price: oldPrice,
  } = facilities[0];

  //if no value is give, use old value as default value
  let {
    name = oldName,
    description = oldDescription,
    product = oldProduct,
    rating = oldRating,
    price = oldPrice,
  } = req.body;
  facilities = facilities.map((facility) =>
    facility.id === id
      ? { ...facility, name, description, product, rating, price }
      : facility,
  );
  res.status(201).send("Updated Successfully");
});

/**
 * DELETE
 */
facilityRouter.delete("/facility/:id", (req, res) => {
  let { id } = req.params;
  facilities = facilities.filter((facility) => facility.id !== id);
  res.status(201).send("Deleted Successfully");
});

export default facilityRouter;
