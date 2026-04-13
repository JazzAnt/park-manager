import mongoose from "mongoose";
import { uri } from "../mongodb_uri";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Database");
  } catch (err) {
    console.error("Error Connecting to DB:", err.message);
    process.exit(1);
  }
};
export const disconnectDB = async () => {
  await mongoose.connection.close();
  console.log("Connection Closed");
};
