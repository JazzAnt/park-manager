import express from "express";
import facilityRouter from "./routes/facilityRoutes.js";
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", facilityRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up and listening to requests at", PORT);
});
