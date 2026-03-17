import express from "express";
import data from "./data.json" with { type: "json" };

const router = express();
router.use(express.urlencoded({ extended: true }));

let facilities = data;
/**
 * GET
 */
router.get("/read", (req, res) => {
  res.status(200).send(facilities);
});
/**
 * POST
 * Normally users set most of the parameters, but for now we make
 * users set only the name, description and product to simplify testing
 */
router.post("/create", (req, res) => {
  let { name, description = "", product } = req.body;
  facilities = [
    ...facilities,
    {
      id: new Date().getTime(), //Id should be v4() but I don't wanna install uuid just for testing
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
    },
  ];
  res.status(201).send("Posted Successfully");
});
/**
 * PUT
 */
router.put("/update/name", (req, res) => {
  let { id, name } = req.body;
  facilities = facilities.map((facility) =>
    facility.id === id ? { ...facility, name } : facility,
  );
  res.status(201).send("Updated Successfully");
});

router.put("/update/product", (req, res) => {
  let { id, product } = req.body;
  facilities = facilities.map((facility) =>
    facility.id === id ? { ...facility, product } : facility,
  );
  res.status(201).send("Updated Successfully");
});
/**
 * DELETE
 */
router.delete("/delete", (req, res) => {
  let { id } = req.body;
  facilities = facilities.filter((facility) => facility.id !== id);
  res.status(201).send("Deleted Successfully");
});

const PORT = 5000;
router.listen(PORT, () => {
  console.log("Simulated Route is up and listening to requests at", PORT);
});
