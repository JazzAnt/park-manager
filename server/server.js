import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Server is up and running.</h1>")
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up and listening to requests at", PORT);
});
