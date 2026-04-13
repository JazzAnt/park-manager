import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Error: No name specified"],
  },
  description: {
    type: String,
    default: "No Description",
  },
  category: {
    type: String,
    required: [true, "Error: No category specified"],
  },
  image: {
    type: String,
    required: [true, "Error: No image url specified"],
  },
  imageSource: {
    type: String,
    default: "Unknown Source",
  },
  product: {
    type: String,
    required: [true, "Error: No product name specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Error: Please specify a rating between 1-5"],
  },
  price: {
    type: Number,
    min: 0,
    max: 20,
    required: [true, "Error: Please specify a price between 0-20"],
  },
  maintenance: {
    type: Boolean,
    default: false,
  },
  maintenanceDate: {
    type: Date,
    default: Date.now,
  },
});

export const Facility = mongoose.model("Facility", facilitySchema);
