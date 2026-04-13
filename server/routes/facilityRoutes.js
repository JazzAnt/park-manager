import express from "express";
import { Facility } from "../models/facilities.js";

const router = express.Router();

// GET ALL FACILITIES
router.get("/facilities", async (req, res) => {
  try {
    const facilities = await Facility.find();
    if (facilities.length === 0) {
      return res
        .status(404)
        .json({ error: "No facilities found in the database." });
    }
    res.status(200).json(facilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ONE FACILITY
router.get("/facilities/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const facility = await Facility.findById(id);
    if (!facility) {
      return res
        .status(404)
        .json({ error: "No facility with that id found in the database." });
    }
    res.status(200).json(facility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL FACILITY OF A SPECIFIED CATEGORY
router.get("/facilities/category/:category", async (req, res) => {
  let { category } = req.params;
  try {
    const facilities = await Facility.find({category: category});
    if (facilities.length === 0) {
      return res
        .status(404)
        .json({ error: "No facilities of that category found in the database." });
    }
    res.status(200).json(facilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST FACILITY
router.post("/facilities", async (req, res) => {
  try {
    const facility = new Facility(req.body);
    const saved = await facility.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT FACILITY
router.put("/facilities/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const updated = await Facility.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res
        .status(404)
        .json({ error: "No facility with that id found in the database." });
    }
    res.status(201).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE FACILITY
router.delete("/facilities/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const deleted = await Facility.findByIdAndDelete(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ error: "No facility with that id found in the database." });
    }
    res.status(201).json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
