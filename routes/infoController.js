import Router from "express";
import infoModel from "../models/infoModel.js";
const danceRouter = Router();

danceRouter.get("/danceapi", async (req, res) => {
  const info = await infoModel.find();
  res.send(info);
});

danceRouter.post("/danceapi", async (req, res) => {
  try {
    const userName = req.body.name;
    const userPhone = req.body.phone;
    const userEmail = req.body.email;
    const info = new infoModel({
      name: userName,
      phone: userPhone,
      email: userEmail,
    });
    const savedBlog = await info.save();
    res.send(savedBlog);
  } catch (err) {
    console.log(err);
  }
});

danceRouter.delete("/danceapi", async (req, res) => {
  try {
    const result = await infoModel.deleteMany({});
    if (result.deletedCount > 0) {
      return res
        .status(200)
        .json({ message: "All records deleted syccessfully" });
    } else {
      return res.status(404).json({ message: "No records found to delete" });
    }
  } catch (err) {
    return res.status(404).send(err);
  }
});

danceRouter.delete("/danceapi/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocument = await infoModel.findByIdAndDelete(id);
    if (deletedDocument) {
      return res.status(200).json({ message: "Record deleted successfully." });
    } else {
      return res.status(404).json({ message: "Record not found." });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error while deleting record" });
  }
});

export default danceRouter;
