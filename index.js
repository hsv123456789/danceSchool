import express from "express";
import mongoose from "mongoose";
import danceRouter from "./routes/infoController.js";
import cors from "cors";
const app = new express();
app.use(cors());
app.use(express.json());
app.use(danceRouter);
const port = 3000;
const uri =
  "mongodb+srv://hsv123456789:vaishnavee@cluster0.yzu2ier.mongodb.net/danceSchoolBackend";
mongoose.connect(uri);

const connected = mongoose.connection ? "Yes" : "no";
console.log("Mongoose is " + connected);

app.get("/", (request, response) => {
  response.send("Hello there");
});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
